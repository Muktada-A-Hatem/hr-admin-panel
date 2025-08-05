"use client";

import { Opacity } from "@mui/icons-material";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  cssVariables: true,
  direction: "ltr",
  breakpoints: {
    values: {
      xs: 400, // Extra small (default)
      sm: 800, // Small (default)
      md: 1000, // Medium (default)
      lg: 1200, // Large (default)
      xl: 1536, // Extra large (default)
    },
  },
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
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
          overflow: "hidden",
          "&.Mui-selected": {
            backgroundColor: "var(--primary-color)",
          },
          "&.Mui-selected:hover": {
            backgroundColor: "var(--primary-dark)",
          },
          ":hover": {
            backgroundColor: "var(--primary-light)",
          },
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "var(--secondary-color)",
          ".Mui-selected &": { color: "var(--reverse-text-color)" },
        },
      },
    },
    MuiListItemText: {
      defaultProps: {
        primaryTypographyProps: {
          variant: "h5",
        },
      },
      styleOverrides: {
        primary: {
          color: "var(--text-color)",
          ".Mui-selected &": {
            color: "var(--reverse-text-color)",
          },
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
