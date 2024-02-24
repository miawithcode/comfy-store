import { Form, Link } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';

export const action = (store) => async () => {
  console.log(store);
  return null;
}

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl capitalize font-bold">login</h4>
        <FormInput label="username / email" name="identifier" type="email" />
        <FormInput label="password" name="password" type="password" />

        <div className="mt-4">
          <SubmitBtn text="login" />
        </div>

        <p className='text-gray-400 text-center uppercase divider'>or</p>
        <button type="button" className="btn btn-secondary btn-block uppercase">
          guest user
        </button>
        <p className="text-center">
          Not a member yet?
          <Link
            to="/register"
            className="ml-1 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
