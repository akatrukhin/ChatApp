import React from "react";
import { createUseStyles } from "react-jss";
import { observer } from "mobx-react-lite";

import { ChatEntities, EntitiesApiStatus } from "../entities";
import { WelcomeScreen } from "./welcome";
import { Chat } from "./chat";
import { globalStyles } from "./styles";
import { LoadingIndicator, ErrorMessage } from "./shared";

export const App = observer(
  ({ chatEntities }: { chatEntities: ChatEntities }) => {
    const styles = useStyles();

    let content = <LoadingIndicator />;
    if (chatEntities.apiStatus === EntitiesApiStatus.Connected) {
      content = chatEntities.isActive ? <Chat /> : <WelcomeScreen />;
    }

    let error;
    if (
      chatEntities.apiStatus !== EntitiesApiStatus.Connected &&
      chatEntities.apiStatus !== EntitiesApiStatus.Loading
    ) {
      error = <ErrorMessage message={chatEntities.apiStatus} />;
    }

    return (
      <div className={styles.root}>
        {content}
        {error}
      </div>
    );
  }
);

const useStyles = createUseStyles({
  ...globalStyles,
  root: {
    position: "relative",
    width: "100%",
    minWidth: "770px",
    height: "100vh",
    padding: 40,
    overflowY: "scroll",
  },
});
