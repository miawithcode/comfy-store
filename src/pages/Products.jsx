import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { customFetch } from '../utils';

const url = '/products';

export const loader = async ({ request }) => {
  const response = await customFetch(url);
  return { products: response.data.data, meta: response.data.meta };
  
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
