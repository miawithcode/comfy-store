import ProductsGrid from './ProductsGrid';
import SectionTitle from './SectionTitle';

const FeaturedProducts = () => {
  return (
    <div className="pt-24">
      <SectionTitle title="featured products" desc="We offer best products" />
      <ProductsGrid />
    </div>
  );
};
export default FeaturedProducts;
