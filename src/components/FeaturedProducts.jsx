import { Link } from 'react-router-dom';
import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <div className="flex justify-between items-center">
        <SectionTitle title="featured products" desc="We offer best products" />
        <Link
          to="products"
          className="btn btn-primary tracking-wide capitalize self-end"
        >
          All Products
        </Link>
      </div>
      <ProductsGrid />
    </div>
  );
};
export default FeaturedProducts;
