import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom'
import { Router } from "./Router";


import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { GithubDataContextProvider } from "./contexts/GithubDataContext";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
          <GithubDataContextProvider>
            <Router />
          </GithubDataContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

