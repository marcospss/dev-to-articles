// import Image from 'next/image';
import Link from 'next/link';

import { Article } from '~/infrastructure/models/article';
import { Card, Header, Description, Tags, Footer } from './styles';

type Props = Pick<
  Article,
  | 'description'
  | 'cover_image'
  | 'title'
  | 'tags'
  | 'slug'
  | 'comments_count'
  | 'public_reactions_count'
  | 'user'
>;

const CardTitleDescription = ({
  description,
  title,
  tags,
  slug,
  comments_count,
  public_reactions_count,
  user,
}: Props): JSX.Element => {
  return (
    <Card>
      {/* {cover_image ? (
        <Image src="https://image.tmdb.org/t/p/w780/3ombg55JQiIpoPnXYb2oYdr6DtP.jpg" alt={title} width="100%" height="100%" loading="lazy" />
      ) : null} */}
      <Header>
        <h1>
          <Link href={`/[username]/[slug]`} as={`/${user.username}/${slug}`}>
            {title}
          </Link>
        </h1>
      </Header>
      <Description>{description}</Description>
      <Tags>{tags}</Tags>
      <Footer>
        <span>{public_reactions_count} reactions</span>
        <span>{comments_count} comments</span>
      </Footer>
    </Card>
  );
};

export default CardTitleDescription;
