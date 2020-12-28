const colorPalette = {
  neutral: {
    100: "#f5f7fa",
    200: "#c3cfe2",
    400: "#828B9A",
    800: "#5D6572"
  },
  red: {
    100: "#E7C7CD",
    300: "#d896a1",
    500: "#C92A44"
  },
  brand: {
    300: "#d8e2f1",
    500: "#456CAA",
    600: "#365B96"
  },
  white: "white",
  black: "black",
  transparent: "transparent"
}

const defaultTheme = {
  "--body-fg": colorPalette.neutral["800"],
  "--body-bg": `linear-gradient(135deg, ${colorPalette.neutral["100"]} 0%, ${colorPalette.neutral["200"]} 100%)`,
  "--weclome-fg": colorPalette.neutral["800"],
  "--weclome-bg": colorPalette.white,
  "--error-fg": colorPalette.red["500"],
  "--error-bg": colorPalette.red["100"],
  "--error-border": `1px solid ${colorPalette.red["300"]}`,
  "--input-bg": colorPalette.neutral["100"],
  "--input-placeholder": colorPalette.neutral["400"],
  "--button-fg": colorPalette.white,
  "--button-bg": colorPalette.brand["500"],
  "--button-hover-bg": colorPalette.brand["600"],
  "--chat-bg": colorPalette.white,
  "--chat-border": `1px solid ${colorPalette.neutral["100"]}`,
  "--chat-sent-message-bg": colorPalette.brand["300"],
  "--chat-recieved-message-bg": colorPalette.neutral["100"]
}

export const globalStyles = {
  "@global": {
    html: defaultTheme,
    body: {
      width: "100%",
      fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
      color: "var(--body-fg)",
      background: "var(--body-bg)",
      margin: 0,
    },
    div: {
      boxSizing: "border-box",
    }
  },
}

export const sharedStyles = {
  input: {
    width: "100%",
    padding: "1rem 1.25rem",
    fontSize: "1rem",
    borderRadius: "6px",
    backgroundColor: "var(--input-bg)",
    border: "none",
    transition: "box-shadow .2s ease-out",

    "&:focus": {
      outline: "none",
      boxShadow: "inset 0 1px 9px -3px rgba(0, 0, 0, .175)"
    },

    "&:placeholder": {
      color: "var(--input-placeholder)",
    },
  },
  button: {
    color: "var(--button-fg)",
    backgroundColor: "var(--button-bg)",
    fontWeight: 600,
    padding: "1rem 1.25rem",
    borderRadius: "6px",
    margin: "0 0 0 1rem",
    minWidth: "6rem",
    border: "none",
    cursor: "pointer",
    transition: "background .2s ease-out, filter .2s ease-out, opacity .1s ease-out",

    "&:hover": {
      backgroundColor: "var(--button-hover-bg)",
    },


    "&:focus": {
      outline: "none",
    },

    "&:disabled": {
      filter: "grayscale(1)",
      opacity: ".4"
    }
  }
}