import laracamp from "./laracamp";

export const parameters = {
  docs: {
    theme: laracamp,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
