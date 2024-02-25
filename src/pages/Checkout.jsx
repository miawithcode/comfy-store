import { useSelector } from 'react-redux';
import { CartTotals, CheckoutForm } from '../components';

const CheckOut = () => {
  const cartTotal = useSelector((state) => state.cartState.cartTotal);
  if (cartTotal === 0) {
    return (
      <h2 className="text-3xl tracking-wide font-medium">
        Your cart is currently empty
      </h2>
    );
  }

  return (
    <>
      <h2 className="text-3xl font-bold text-center">Place your order</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2 item-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default CheckOut;
