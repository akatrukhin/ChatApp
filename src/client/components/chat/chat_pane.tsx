import React, { useEffect, useRef, useState } from "react";
import { createUseStyles } from "react-jss";
import api from "../../lib/api";
import { ChatMessage } from "./chat_message";
import { IChatMessage } from "./types";

export const ChatPane = () => {
  const styles = useStyles();
  const messagesRef = useRef<IChatMessage[]>([]);
  const anchorRef = useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = useState<IChatMessage[]>([]);

  useEffect(() => {
    const socket: WebSocket = api.openMessageSocket();
    console.log(socket);
    function socketMessage(event: MessageEvent) {
      const json = JSON.parse(event.data);
      if (json.type === "message") {
        messagesRef.current = [...messagesRef.current, json.data];
        setMessages([...messagesRef.current, json]);
        anchorRef.current!.scrollIntoView();
      }
    }
    socket.addEventListener("message", socketMessage);
    return () => {
      socket.removeEventListener("message", socketMessage);
      socket.close();
    };
  }, []);

  return (
    <div className={styles.chat}>
      {messagesRef.current.map((message: IChatMessage, key: number) => (
        <ChatMessage key={key} {...message} />
      ))}
      <div ref={anchorRef}></div>
    </div>
  );
};

const useStyles = createUseStyles({
  chat: {
    flexGrow: 1,
    borderBottom: "var(--chat-border)",
    margin: "0 0 1rem 0",
    paddingBottom: "1rem",
    overflowY: "scroll",
    animation: "$chatFadeIn 1s both ease-out",
  },
  "@keyframes chatFadeIn": {
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
  },
});
