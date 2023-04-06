import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import { withLayout } from '../../../components/Layout/Layout';
import axios from 'axios';
import { MenuItem } from '../../../interfaces/menu.interface';
import { firstLevelMenu } from '../../../helpers/helpers';
import { ParsedUrlQuery } from 'node:querystring';

function Type({ firstCategory }: TypeProps): JSX.Element {
  return <>Type : {firstCategory}</>;
}

export default withLayout(Type);

export const getStaticProps: GetStaticProps<TypeProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }
  const firstCategoryItem = firstLevelMenu.find((m) => m.route == params.type);
  if (!firstCategoryItem) {
    return {
      notFound: true,
    };
  }
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory: firstCategoryItem.id,
    }
  );
  return {
    props: {
      menu,
      firstCategory: firstCategoryItem.id,
    },
  };
};
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: firstLevelMenu.map((m) => '/' + m.route),
    fallback: true,
  };
};

interface TypeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
