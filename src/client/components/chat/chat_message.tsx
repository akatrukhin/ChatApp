import React from "react";
import { createUseStyles } from "react-jss";
import { chatEntities } from "../../entities";
import { IChatMessage } from "./types";

export const ChatMessage = ({ body, from, time }: IChatMessage) => {
  const styles = useStyles();

  return (
    <div
      className={chatEntities.author === from ? styles.sent : styles.recieved}
    >
      <div>
        <span className={styles.author}>{from}</span>
        <span className={styles.time}>
          {new Date(time).toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
      <div className={styles.message}>{body}</div>
    </div>
  );
};

const useStyles = createUseStyles({
  root: {
    borderRadius: "6px",
    padding: ".5rem 1rem",
    marginBottom: ".55rem",
    opacity: 0,
    animation: "$messageIn .1s .175s both ease-out",
  },
  sent: {
    composes: "$root",
    background: "var(--chat-sent-message-bg)",
    marginLeft: "2rem",
  },
  recieved: {
    composes: "$root",
    background: "var(--chat-recieved-message-bg)",
    marginRight: "2rem",
  },
  author: {
    fontSize: ".75rem",
    fontWeight: "bold",
  },
  time: {
    fontSize: ".75rem",
    opacity: ".75",
    margin: "0 .5rem",
  },
  message: {
    margin: ".25rem 0",
  },
  "@keyframes messageIn": {
    from: {
      opacity: 0,
      transform: "translate3d(0, 5px, 0)",
    },
    to: { opacity: 1 },
  },
});
