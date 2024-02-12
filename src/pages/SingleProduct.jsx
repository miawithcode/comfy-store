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

  return (
    <section>
      {/* BREADCRUMBS */}
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* PRODUCTS DETAIL */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE */}
        <div>
          <img
            src={image}
            alt={title}
            className="w-96 aspect-square object-cover rounded-lg lg:w-full"
          />
        </div>
        {/* PRODUCT INFO */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarAmount}</p>
          <p className="mt-6 leading-8">{description}</p>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
