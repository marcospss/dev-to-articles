import { ThemeProvider } from 'styled-components';

import theme from '~/application/styles/theme';
import GlobalStyle from '~/application/styles/global';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App;
