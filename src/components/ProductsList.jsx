import { Link, useLoaderData } from 'react-router-dom';
import { formatPrice } from '../utils';

const ProductsList = () => {
  const { products } = useLoaderData();

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image, company, category } = product.attributes;
        const dollarsAmount = formatPrice(price);
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl transition duration-300 group"
          >
            <img
              src={image}
              alt={title}
              className="rounded-lg h-24 w-24 md:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
            />
            <div className="ml-0 sm:ml-16 flex flex-col justify-between">
              <div>
                <h3 className="capitalize font-medium text-lg">{title}</h3>
                <h4 className="capitalize text-md text-gray-500">{company}</h4>
              </div>
              <div className="badge badge-neutral text-neutral-content p-3">
                {category}
              </div>
            </div>
            <p className="font-medium ml-default sm:ml-auto text-lg text-secondary">
              {dollarsAmount}
            </p>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsList;
