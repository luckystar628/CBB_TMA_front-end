import { Outlet, useLocation } from "react-router-dom";
import Footer from "./component/Footer";
export default function Layout() {
  const location = useLocation();

  return (
    <div className="relative w-full h-screen flex flex-col justify-between bg-gradient-bottom-center p-5 poppins-thin">
      <div>
        {location.pathname === "/" && (
          <div className="text-2xl mt-[10vh]">Welcome to</div>
        )}
        <img
          src="/nomad-logo.png"
          alt="logo"
          className={`mx-auto ${
            location.pathname === "/" ? "mt-2" : "mt-[10vh]"
          }`}
        />
        {
          <div className="text-xl font-light mt-1">
            {location.pathname !== "/airdrop" ? "daily" : "daily airdrop"}
          </div>
        }
      </div>
      <Outlet />
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}
