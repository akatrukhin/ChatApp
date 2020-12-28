import React, { useEffect, useState } from "react";
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
    const [showError, setShowError] = useState<boolean>(false);

    useEffect(() => {
      setShowError(
        chatEntities.apiStatus !== EntitiesApiStatus.Connected &&
          chatEntities.apiStatus !== EntitiesApiStatus.Loading
      );
    }, [chatEntities.apiStatus]);

    let content = <LoadingIndicator />;
    if (chatEntities.apiStatus !== EntitiesApiStatus.Loading) {
      content = chatEntities.isOpen ? <Chat /> : <WelcomeScreen />;
    }

    return (
      <div className={styles.app}>
        {content}

        {showError && <ErrorMessage message={chatEntities.apiStatus} />}
      </div>
    );
  }
);

const useStyles = createUseStyles({
  ...globalStyles,
  app: {
    position: "relative",
    width: "100%",
    minWidth: "770px",
    height: "100vh",
    padding: 40,
    overflowY: "scroll",
  },
});
