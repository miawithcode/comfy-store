import { Outlet, useNavigation } from 'react-router-dom';
import { Header, Navbar, Footer, GlobalLoading } from '../components';

const HomeLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <>
      <Header />
      <Navbar />
      {isLoading ? (
        <GlobalLoading />
      ) : (
        <section className="section py-20">
          <Outlet />
        </section>
      )}

      <Footer />
    </>
  );
};
export default HomeLayout;
