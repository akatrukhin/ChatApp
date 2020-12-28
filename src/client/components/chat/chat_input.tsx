import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { sharedStyles } from "../styles";
import { chatEntities } from "../../entities";

export const ChatInput = () => {
  const styles = useStyles();
  const [message, setMessage] = useState<string>("");

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        chatEntities
          .sentMessage({ from: chatEntities.author!, body: message })
          .then(() => setMessage(""))
          .catch((err) => {
            chatEntities.apiStatus = err.toString();
          });
      }}
    >
      <input
        autoFocus
        type="text"
        className={styles.input}
        value={message}
        placeholder="Enter a message"
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <input
        className={styles.button}
        type="submit"
        value="Send"
        disabled={!message}
        maxLength={200}
      />
    </form>
  );
};

const useStyles = createUseStyles({
  form: {
    display: "flex",
  },
  input: sharedStyles.input,
  "@keyframes welcomeIn": {
    from: {
      opacity: 0,
      transform: "translate3d(0, 40px, 0)",
    },
    to: { opacity: 1 },
  },
  button: sharedStyles.button,
});
