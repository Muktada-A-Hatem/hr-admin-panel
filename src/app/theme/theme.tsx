"use client";

import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "light",
    primary: {
      main: "#f89c1c",
      light: "#f89c1c",
      dark: "#f78c1b",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#F89C1C",
      light: "#F89C1C",
      dark: "#484848",
    },
  },
  typography: {
    h1: { fontWeight: "900" },
    h2: { fontWeight: "900" },
    h3: { fontWeight: "800" },
    h4: { fontWeight: "700" },
    h5: { fontWeight: "500" },
    h6: { fontWeight: "500" },

    fontFamily: ["Tajawal", "Cairo"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          height: "3.5rem",
          fontSize: "2rem",
          fontWeight: "800",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "var(--foreground-color)",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
