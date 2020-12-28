import React from "react";
import { createUseStyles } from "react-jss";

export const ErrorMessage = ({ message }: { message: string }) => {
  const styles = useStyles();
  return (
    <pre className={styles.root}>
      <b>Error:</b> {message}
    </pre>
  );
};

const useStyles = createUseStyles({
  root: {
    position: "fixed",
    top: 0,
    left: "50%",
    padding: "1rem 2rem",
    borderRadius: "6px",
    fontWeight: 600,
    color: "var(--error-fg)",
    background: "var(--error-bg)",
    border: "var(--error-border)",
    animation: "$notificationIn .2s both ease-in-out",
  },
  "@keyframes notificationIn": {
    from: {
      opacity: 0,
      transform: "translate3d(0, -100%, 0)",
    },
    to: { opacity: 1 },
  },
});
