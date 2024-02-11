import { Outlet } from 'react-router-dom';
import { Header, Navbar, Footer } from '../components';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <section className='section py-20'>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default HomeLayout;
