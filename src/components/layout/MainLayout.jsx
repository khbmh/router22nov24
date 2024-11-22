import { Outlet } from 'react-router';
import Nav from './Nav';
import Footer from './Footer';

function MainLayout() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto min-h-[90vh] text-5xl flex items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
