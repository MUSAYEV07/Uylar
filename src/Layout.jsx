import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function Layout() {
  return (
    <div>
     <Header/>
     <Hero/>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;