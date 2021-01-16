import { NextPage } from 'next';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '~/application/styles/global';
import theme from '~/application/styles/theme';
import Head from '~/infrastructure/layout/Head';
import Footer from '~/infrastructure/layout/Footer';

const IndexPage: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head />
      <GlobalStyle />
      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js TypeScript!</a>
        </h1>
      </main>
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;
