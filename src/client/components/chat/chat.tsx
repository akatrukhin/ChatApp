import React, { useEffect } from "react";
import { createUseStyles } from "react-jss";
import { ChatPane } from "./chat_pane";
import { ChatInput } from "./chat_input";
import { chatEntities } from "../../entities";
import api from "../../lib/api";

export const Chat = () => {
  const styles = useStyles();

  return (
    <div className={styles.chat}>
      <a
        className={styles.close}
        onClick={(e) => {
          e.preventDefault();
          chatEntities.closeChat();
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M14.8 12l3.6-3.6c.8-.8.8-2 0-2.8a2 2 0 00-2.8 0L12 9.2 8.4 5.6a2 2 0 00-2.8 0 2 2 0 000 2.8L9.2 12l-3.6 3.6a2 2 0 000 2.8c.4.4.9.6 1.4.6s1-.2 1.4-.6l3.6-3.6 3.6 3.6c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8L14.8 12z" />
        </svg>
      </a>
      <ChatPane />
      <ChatInput />
    </div>
  );
};

const useStyles = createUseStyles({
  chat: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "800px",
    margin: "0 auto",
    height: "100%",
    padding: "2.5rem 2rem 1.75rem",
    borderRadius: "20px",
    backgroundColor: "var(--chat-bg)",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    animation: "$chatIn .4s both ease-in-out",
    willChange: "transform, opacity",
  },
  close: {
    position: "absolute",
    top: ".3rem",
    right: ".5rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "2rem",
    height: "2rem",
    cursor: "pointer",

    "& svg": {
      width: "1rem",
      height: "1rem",
      opacity: ".2",
    },
  },
  "@keyframes chatIn": {
    from: {
      opacity: 0,
      transform: "translate3d(0, 20px, 0)",
    },
    to: { opacity: 1 },
  },
});
