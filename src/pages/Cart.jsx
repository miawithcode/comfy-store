import { useSelector } from 'react-redux';
import { CartItemsList, CartTotals } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {
  // temp, supposed to be userSlice
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  if (numItemsInCart === 0) {
    return <h2 className='text-3xl tracking-wide font-medium'>Your cart is currently empty</h2>;
  }

  return (
    <>
      <h1 className="text-3xl font-bold">Cart</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
          {user ? (
            <Link
              to="/checkout"
              className="btn btn-primary btn-block mt-8 capitalize"
            >
              Checkout
            </Link>
          ) : (
            <Link
              to="/login"
              className="btn btn-primary btn-block mt-8 capitalize"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
