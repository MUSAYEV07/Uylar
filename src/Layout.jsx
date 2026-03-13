import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function Layout() {
  return (
    <div>
     <Header/>
     <Hero/>
     <Footer/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;