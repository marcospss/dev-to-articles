import { GetServerSideProps } from 'next';
import useSWR from 'swr';

import fetcher from '~/infrastructure/utils/fetcher';
import { Article } from '~/infrastructure/models/article';
import CardTitleDescription from '~/application/components/CardTitleDescription';

type Props = {
  articles: Article[];
  page: number;
  perPage: number;
};

const pathEndpoint = '/articles';

const Articles = ({ articles, page = 1, perPage = 20 }: Props): JSX.Element => {
  const { data } = useSWR<Article[]>(`${pathEndpoint}?page=${page}&per_page=${perPage}`, fetcher, {
    initialData: articles,
  });

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
  const articles = await fetcher(`${pathEndpoint}?page=1&per_page=20`);
  return { props: { articles } };
};

export default Articles;
