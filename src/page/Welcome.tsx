
import { Link } from 'react-router-dom'
import {AnnounceList} from '../assets/const'
import AnnounceItem from '../component/AnnounceItem'
import { useEffect } from "react";
// import axios from "axios";

import { useGlobalContext } from "../context/GlobalContext";
export default function Welcome() {
  const backend = import.meta.env.VITE_BACKEND;

  const { user } = useGlobalContext();

  useEffect(() => {
    const webapp = (window as any).Telegram?.WebApp.initDataUnsafe;
    if (webapp) {
      // setUser({
      //   username: webapp["user"]["username"],
      //   id: webapp["user"]["id"],
      //   score: 0,
      //   isInvited: false,
      // });
      console.log("webapp", webapp["user"], backend);
      // loginUser();
    }
  }, []);

  useEffect(() => {
    console.log("=========>user", user);
  }, [user]);
  return (
    <div className="mt-5 w-[90%] mx-auto gap-5 max-sm:gap-1 flex flex-col mb-5 grow overflow-auto scrollbar-hidden">
      {
        AnnounceList.map((item, index) => {
          return <AnnounceItem key={index} {...item} />
        })
      }
      <Link to="/daily" className="mt-auto mb-2 text-center bg-white py-5 text-black hover:text-black rounded-md hover:opacity-80 active:opacity-50">get started</Link>
    </div>
  )
}
