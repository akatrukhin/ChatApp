import { observable } from "mobx";
import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import { createUseStyles } from "react-jss";
import { chatEntities } from "../../entities";
import { ChatMessage } from "./chat_message";
import { IChatMessage } from "./types";

export const ChatPane = observer(() => {
  const styles = useStyles();
  const anchorRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    anchorRef.current!.scrollIntoView();
  }, [chatEntities.messages.length]);

  return (
    <div className={styles.chat}>
      {chatEntities.messages.map((message: IChatMessage, key: number) => (
        <ChatMessage key={key} {...message} />
      ))}
      <div ref={anchorRef}></div>
    </div>
  );
});

const useStyles = createUseStyles({
  chat: {
    flexGrow: 1,
    borderBottom: "var(--chat-border)",
    margin: "0 0 1rem 0",
    paddingBottom: "1rem",
    overflowY: "scroll",
    animation: "$chatFadeIn .1s both ease-out",
  },
  "@keyframes chatFadeIn": {
    from: {
      opacity: 0,
    },
    to: { opacity: 1 },
  },
});
