import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./src/styles/themes/default";
import { GlobalStyle } from "./src/styles/global";


export function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Heloo world!</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}

