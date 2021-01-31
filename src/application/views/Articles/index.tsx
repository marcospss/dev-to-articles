import { GetServerSideProps } from 'next';
import useSWR from 'swr';

import API from '~/infrastructure/settings/api';
import fetcher from '~/infrastructure/utils/fetcher';
import { Article } from '~/infrastructure/models/article';
import CardTitleDescription from '~/application/components/CardTitleDescription';

// type Props = {
//   articles: Article[];
//   page: number;
//   perPage: number;
// };

const Articles = (): JSX.Element => {
  const { data } = useSWR<Article[]>(`${API.articles}?page=1&per_page=20`, fetcher);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data?.map((article: Article) => (
        <CardTitleDescription key={article.id} {...article} />
      ))}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const articles = await fetcher(`${API.articles}?page=1&per_page=20`);
  return { props: { articles } };
};

export default Articles;
