import { NextPage } from 'next';
import HeadNext from '~/infrastructure/components/Head';
const IndexPage: NextPage = () => {
  return (
    <>
      <HeadNext title="Home" />
      <h1>Article</h1>
    </>
  );
};

export default IndexPage;
