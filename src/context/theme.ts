import React from "react";
export const themes = {
  light: {
    leftBorder: '#000',
    background: '#fff',
  },
  dark: {
    border: '#fff',
    background: '#000',
  },
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);