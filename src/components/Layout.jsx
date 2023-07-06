import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />
      <div className="mb-16 mt-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default Layout;
