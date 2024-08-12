import { Outlet, useLocation } from "react-router-dom";
import axios from "axios";

import Footer from "./component/Footer";
import { useEffect } from "react";
import { useGlobalContext } from "./context/GlobalContext";
import WebApp from '@twa-dev/sdk';
import ShareReferral from "./component/ShareReferral";

export default function Layout() {
  const { setUser } = useGlobalContext();
  const location = useLocation();
  const params = new URLSearchParams(WebApp.initData);
  const backend = import.meta.env.VITE_BACKEND_URL;
  const userData = params.get('user');

  useEffect(() => {
    loginUser();
    console.log("userData", userData);
  }, [userData]);

  const loginUser = async () => {
    if (!userData) return
    setUser({
      username: JSON.parse(userData).username,
      score: 0,
      id: JSON.parse(userData).id,
      isInvited: false,
    })
    axios
      .post(`${backend}/user/login`, {
        telID: JSON.parse(userData).id,
        username: JSON.parse(userData).username,
      })
      .then((res: any) => {
        console.log("res", res);
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col justify-between bg-gradient-bottom-center p-5 poppins-thin">
      <div>
        {location.pathname === "/" && (
          <div className="text-2xl mt-[10vh] max-sm:mt-[3vh]">Welcome to</div>
        )}
        <img
          src="/nomad-logo.png"
          alt="logo"
          className={`mx-auto ${location.pathname === "/"
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
      <div className="flex flex-col w-full space-y-20">
        {location.pathname !== "/" && location.pathname !== "/airdrop" &&location.pathname !== "/daily" && <ShareReferral />}
        {location.pathname !== "/" && <Footer />}
      </div>
    </div>
  );
}
