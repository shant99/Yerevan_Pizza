import Footer from "./Footer";
import Navbar from "./Navbar.tsx";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

export default Layout