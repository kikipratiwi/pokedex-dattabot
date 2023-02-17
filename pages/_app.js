import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
