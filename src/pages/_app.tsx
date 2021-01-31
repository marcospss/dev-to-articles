/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ThemeProvider } from 'styled-components';

import theme from '~/application/styles/theme';
import GlobalStyle from '~/application/styles/global';

const App = ({ Component, pageProps }: any): JSX.Element => {
  return (
    <>
      <GlobalStyle theme={theme} />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
