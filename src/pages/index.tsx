import { NextPage } from 'next';

import Head from '~/infrastructure/components/Head';

const IndexPage: NextPage = () => {
  return (
    <>
      <Head title="Articles" />
      <main>
        <h1>Welcome to Next.js TypeScript @dev-to Articles!</h1>
      </main>
    </>
  );
};

export default IndexPage;
