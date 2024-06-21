import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
// import axios from "axios";

import { useGlobalContext } from "./context/GlobalContext";
import Footer from "./component/Footer";

export default function Layout() {
  const backend = import.meta.env.VITE_BACKEND;
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
      });
      console.log("webapp", webapp["user"], backend);
      // loginUser();
    }
  }, []);

  useEffect(() => {
    console.log("=========>user", user);
  }, [user]);

  // const loginUser = async () => {
  //   axios
  //     .post(`${backend}/user/login`, {
  //       id: user.id,
  //       username: user.username,
  //     })
  //     .then((res: any) => {
  //       console.log("res", res);
  //     })
  //     .catch((err: any) => {
  //       console.log("err", err);
  //     });
  // };

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
            location.pathname === "/"
              ? "mt-2 max-sm:mt-1"
              : "mt-[10vh] max-sm:mt-[3vh]"
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
