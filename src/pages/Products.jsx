import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  // ALTERNATIVE - MANUALLY GET EACH VALUE:
  // const params = new URL(request.url).searchParams;
  // const search = params.get('search'); // Get Search Value

  const response = await customFetch(url, {
    params: params,
  });
  return { products: response.data.data, meta: response.data.meta, params };

  // ALTERNATIVE:
  // const products = response.data.data;
  // const meta = response.data.meta;
  // return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
