import NextHead from 'next/head';

type Props = {
  title: string;
};

const Head = ({ title }: Props): JSX.Element => {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <title>{title} | DEV Community</title>
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
};

export default Head;
