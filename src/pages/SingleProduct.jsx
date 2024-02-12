import { Link, useLoaderData } from 'react-router-dom';
import { customFetch, formatPrice } from '../utils';

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  const product = response.data.data;
  return { product };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, category, colors, description, title, price, company } =
    product.attributes;
  const dollarAmount = formatPrice(price);
  return <div>SingleProduct</div>;
};
export default SingleProduct;
