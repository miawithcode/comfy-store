import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="grid min-h-screen place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold sm:text-5xl capitalize">
            page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary capitalize">
              Take me home
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">Somthing went wrong...</h4>
    </main>
  );
};
export default Error;
