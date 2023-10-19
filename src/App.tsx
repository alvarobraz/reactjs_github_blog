import { ThemeProvider } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { GithubBlogProvider } from './contexts/GithubBlogContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GithubBlogProvider>
          <Router />
        </GithubBlogProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
