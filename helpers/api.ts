export const API = {
  topPage: {
    find: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    byAlais: process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/',
  },
  products: {
    find: process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find',
  },
  review: {
    createDemo: process.env.NEXT_PUBLIC_DOMAIN + '/api/review/create-demo',
  },
};
