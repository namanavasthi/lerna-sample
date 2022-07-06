// import { Styles } from "@chakra-ui/theme-tools";

const styles = {
  global: {
    body: {
      fontFamily: "body",
      color: "platform-body-text",
      bg: "platform-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
    },
    "*::placeholder": {
      color: "platform-placeholder-color",
    },
    "*, *::before, &::after": {
      borderColor: "platform-border-color",
      wordWrap: "break-word",
    },
  },
};

export default styles;
