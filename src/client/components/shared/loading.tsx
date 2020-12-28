import React from "react";
import { createUseStyles } from "react-jss";

export const LoadingIndicator = () => {
  const styles = useStyles();
  return <div className={styles.root}>Loading...</div>;
};

const useStyles = createUseStyles({
  root: {
    textAlign: "center",
    fontWeight: 600,
    opacity: 0.5,
    transform: "translateY(calc(50vh - 2rem))",
  },
});
