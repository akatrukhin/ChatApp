import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { chatEntities } from "../../entities";
import { sharedStyles } from "../styles";

export const WelcomeScreen: React.FC = () => {
  const styles = useStyles();
  const [userName, setUserName] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const userNameRule = /^[A-Za-z]+$/;

  useEffect(() => {
    setDisabled(!navigator.onLine || userName.length < 3);
    if (!navigator.onLine) {
      chatEntities.testConnection();
    }
  }, [userName, chatEntities.apiStatus]);

  return (
    <div className={styles.welcome}>
      <h1 className={styles.title}>Welcome to Chat App 👋</h1>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          chatEntities.testConnection();
          if (userName.length > 3 && !!userName.match(userNameRule)) {
            chatEntities.joinToChat(userName);
          } else {
            setShowError(true);
          }
        }}
      >
        <input
          type="text"
          className={styles.input}
          placeholder="Enter your name"
          onChange={(e) => setUserName(e.target.value)}
          maxLength={20}
          required
        />
        <input
          className={styles.button}
          type="submit"
          value="Join"
          disabled={disabled}
        />
      </form>
      {showError && (
        <span className={styles.error}>
          Name must be alphanumeric and between 3 and 20 characters
        </span>
      )}
    </div>
  );
};

const useStyles = createUseStyles({
  welcome: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "640px",
    padding: "2.25rem 2rem 4rem",
    borderRadius: "20px",
    backgroundColor: "var(--weclome-bg)",
    transform: "translate3d(-50%, -50%, 0)",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
    animation: "$welcomeIn .4s both ease-in-out",
    willChange: "transform, opacity",
  },
  title: {
    color: "var(--weclome-fg)",
    margin: "0 0 2rem",
  },
  form: {
    display: "flex",
  },
  input: sharedStyles.input,
  button: sharedStyles.button,
  error: {
    position: "absolute",
    display: "block",
    fontSize: ".75rem",
    margin: "1rem 0",
    animation: "$errorMessage 4s both ease-in-out",
  },
  "@keyframes welcomeIn": {
    from: {
      opacity: 0,
      transform: "scale(.98) translate3d(-50%, -40%, 0)",
    },
    to: { opacity: 1 },
  },
  "@keyframes errorMessage": {
    "0%": {
      opacity: 0,
      color: "var(--error-fg)",
    },
    "5%": {
      color: "var(--error-fg)",
      opacity: 1,
    },
    "100%": {
      opacity: ".7",
    },
  },
});
