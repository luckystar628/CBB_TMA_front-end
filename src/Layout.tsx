import { Outlet, useLocation } from "react-router-dom";
import { useGlobalContext } from "./context/GlobalContext";
import Footer from "./component/Footer";
import { useEffect } from "react";
export default function Layout() {
  const location = useLocation();
  const { setUser, user } = useGlobalContext();
  useEffect(() => {
    const webapp = (window as any).Telegram?.WebApp.initDataUnsafe;
    if (webapp && webapp["user"]) {
      setUser({
        username: webapp["user"]["username"],
        id: webapp["user"]["id"],
        score: 0,
        isInvited: false,
      })
    } 
  }, [])

  useEffect(() => {
    console.log("=========>user", user);
  }, [user])

  return (
    <div className="relative w-full h-screen flex flex-col justify-between bg-gradient-bottom-center p-5 poppins-thin">
      <div>
        {location.pathname === "/" && (
          <div className="text-2xl mt-[10vh] max-sm:mt-[3vh]">Welcome to</div>
        )}
        <img
          src="/nomad-logo.png"
          alt="logo"
          className={`mx-auto ${
            location.pathname === "/" ? "mt-2 max-sm:mt-1" : "mt-[10vh] max-sm:mt-[3vh]"
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
