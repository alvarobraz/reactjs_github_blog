import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Cover } from './components/Cover'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Cover />
      <GlobalStyle />
    </ThemeProvider>
  )
}
