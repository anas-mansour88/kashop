import Nav from '../component/Nav'
import Footer from '../component/Footer';
import { Outlet } from 'react-router-dom';

export default function AdminLayout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
