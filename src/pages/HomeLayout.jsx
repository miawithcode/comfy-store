import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className='section py-20'>
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default HomeLayout;
