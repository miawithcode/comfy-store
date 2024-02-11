import { Link, useLoaderData } from 'react-router-dom';

const ProductsGrid = () => {
  const { products } = useLoaderData();
  console.log(products);

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image, company, category } = product.attributes;
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <div className="relative w-full">
                <img
                  src={image}
                  alt={title}
                  className="rounded-xl h-64 md:h-48 w-full object-cover"
                />
                <div className="absolute top-0 left-0 badge-md badge-ghost p-4 flex justify-center items-center rounded-tl-xl rounded-br-xl">
                  {company}
                </div>
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title capitalize tracking-wider">{title}</h2>
              <div className="text-secondary">{price}</div>
              <div className="badge badge-secondary text-base-100 p-3">{category}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default ProductsGrid;
