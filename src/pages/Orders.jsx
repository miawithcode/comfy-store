import toast from 'react-hot-toast';
import { redirect, useLoaderData } from 'react-router-dom';
import { customFetch } from '../utils';
import { OrdersList, ComplexPaginationContainer } from '../components';

const url = '/orders';

const ordersQuery = (queryParams, user) => {
  return {
    queryKey: [
      'orders',
      user.username,
      queryParams.page ? parseInt(queryParams.page) : 1,
    ],
    queryFn: () =>
      customFetch.get(url, {
        params: queryParams,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
      toast.error('You must logged in to view orders');
      redirect('/login');
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]); // for pagination

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );
      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message || 'There was an error';
      toast.error(errorMessage);

      if (error?.response?.status === 401 || error?.response?.status === 403)
        redirect('/login');
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return (
      <h2 className="text-3xl tracking-wide font-medium">
        You haven't make any orders yet
      </h2>
    );
  }
  return (
    <>
      <h2 className="text-3xl font-bold text-center">Your Orders</h2>
      <OrdersList />
      <ComplexPaginationContainer />
    </>
  );
};
export default Orders;
