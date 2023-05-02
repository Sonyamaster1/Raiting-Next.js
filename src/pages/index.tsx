import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, Input, P, Rating, Tag, Textarea } from '../../components';
import { withLayout } from '../../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../../interfaces/menu.interface';
import { API } from '../../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);
  return (
    <>
      <Htag tag='h1'>hi</Htag>
      <Button appearance='primary'>Кнопка</Button>
      <Button appearance='ghost'>Кнопка</Button>
      <P size='s'>Мелкий</P>
      <P size='m'>Средний</P>
      <P size='l'>Большой</P>
      <Tag size='s' color='red'>
        Red
      </Tag>
      <Tag size='m' color='green'>
        Green
      </Tag>
      <Tag size='s' color='primary'>
        Primary
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder='text '/>
      <Textarea placeholder='area text'/>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
