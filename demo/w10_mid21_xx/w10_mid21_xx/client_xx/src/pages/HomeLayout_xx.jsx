import { Outlet } from 'react-router-dom';
import Navbar_xx from '../components/Navbar_xx';

const HomeLayout_xx = () => {
  return (
    <>
      <Navbar_xx />
      <Outlet />
    </>
  );
};

export default HomeLayout_xx;
