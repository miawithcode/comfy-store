import { Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils';
import { clearCart } from '../features/cart/cartSlice';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const url = '/orders';

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;
    const info = {
      address,
      cartItems,
      chargeTotal: orderTotal,
      name,
      numItemsInCart,
      orderTotal: formatPrice(orderTotal),
    };

    try {
      const response = await customFetch.post(
        url,
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success('Order placed successfully');
      return redirect('/orders');
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        'There was an error placing your order';
      toast.error(errorMessage);
      if (error.response.status === 401 || error.response.status === 403)
        return redirect('/login');
      return null;
    }
  };

const CheckoutForm = () => {
  const username = useSelector((state) => state.userState.user.username);

  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize tracking-wide">
        shipping information
      </h4>
      {username === 'demo user' && (
        <p className="text-secondary">
          If you're logged in as a guest user, for safety reasons, any
          information you've entered below will be overwritten with data from
          the server.
        </p>
      )}
      <FormInput label="first name" name="name" type="text" />
      <FormInput label="address" name="address" type="text" />
      <div>
        <SubmitBtn text="place your order" />
      </div>
    </Form>
  );
};
export default CheckoutForm;
