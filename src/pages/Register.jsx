import { Form, Link, redirect } from 'react-router-dom';
import { FormInput, SubmitBtn } from '../components';
import { customFetch } from '../utils';
import toast from 'react-hot-toast';

const url = '/auth/local/register';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await customFetch.post(url, data);
    toast.success('account created successfully!');
    return redirect('/login');
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials';
    toast.error(errorMessage);
  }
  return null;
};

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 flex flex-col shadow-lg gap-y-4"
      >
        <h4 className="text-center text-3xl capitalize font-bold">Register</h4>
        <FormInput label="username" name="username" type="text" />
        <FormInput label="email" name="email" type="email" />
        <FormInput label="password" name="password" type="password" />
        <div className="mt-4">
          <SubmitBtn text="register" />
        </div>
        <p className="text-center">
          Already a member?
          <Link
            to="/login"
            className="ml-1 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
