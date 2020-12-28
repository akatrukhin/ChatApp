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
    position: "sticky",
    top: 0,
    left: "1rem",
    right: "1rem",
    padding: "1rem 2rem",
    borderRadius: "6px",
    fontWeight: 600,
    color: "var(--error-fg)",
    background: "var(--error-bg)",
    border: "var(--error-border)",
  },
});
