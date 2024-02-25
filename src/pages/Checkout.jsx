import { useSelector } from 'react-redux';
import { CartTotals, CheckoutForm } from '../components';
import toast from 'react-hot-toast';
import { redirect } from 'react-router-dom';

export const loader = (store) => () => {
  // If you're doing the checking in a server
  // You'll have to setup request
  // And this function should be async
  const user = store.getState().userState.user;

  if (!user) {
    toast.error('You must be logged in to checkout!');
    return redirect('/login');
  }
  return null;
};

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
