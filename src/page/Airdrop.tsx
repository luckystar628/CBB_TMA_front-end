import axios from "axios";
import { useEffect, useState } from "react";
import { initUtils } from "@tma.js/sdk";
import { useGlobalContext } from "../context/GlobalContext";
import LoadingPage from "./Loading";

export default function Airdrop() {
  const { user } = useGlobalContext();
  const [isCompleted, setIsCompleted] = useState<any>([false, false, false, false, false, false]);
  const [loading, setLoading] = useState<boolean>(true);
  const utils = initUtils();
  const links = ["https://twitter.com/nomadworld_ai", "https://twitter.com/TommydiLEE", "https://x.com/nomadworld_ai/status/1814310835507937421", "https://nomadworld.ai", "https://www.tiktok.com/@nomadworld.ai", "https://www.instagram.com/nomadworld.ai" ]
  const backend = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    getState()
  }, [])

  const handleLink = async (index: number) => {
    let newState = [...isCompleted];
    newState[index] = true;
    // console.log(newState);
    axios.post(`${backend}/task/set`, {
      telID: user.id,
      task: newState
    }).then(res => {
      console.log(res.data.task.task);
      setIsCompleted(res.data.task.task);
      if(isCompleted[index] === false) {
        utils.openLink(links[index],  );

      }
    }).catch(error => console.error(error));
  }
  const getState = async () => {
    axios.post(`${backend}/task/get`, {
      telID: user.id
    }).then(res => {
      setLoading(false);
      setIsCompleted(res.data.task.task);
    }).catch(err => console.error(err))
  }

  return (
    <div className="mx-10 max-sm:mx-0">
      {loading ? <LoadingPage /> :
        <>
          <div className="text-2xl font-[600] max-sm:text-lg">complete daily actions<br /> for your chance to win blob!</div>
          <div className="flex flex-col gap-6 max-sm:gap-4 my-10 max-sm:my-5 overflow-auto h-[400px]">
            <div 
             //to={`${!isCompleted? "https://twitter.com/nomadworld_ai" : ""}`} 
             className={`text-lg text-[16px] flex justify-center px-3 items-center gap-3 text-white font-light py-3 rounded-xl shadow-lg border-[#ffffff33] border-2 ${isCompleted[0] ? "bg-[#2F9A21] cursor-not-allowed" : "bg-[#ffffff] bg-opacity-10 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10"}`}
              onClick={() => !isCompleted[0] &&handleLink(0)}
            >
              follow us on X
              <div className="flex justify-center items-center gap-2"><img src="/image/Coin_small.png" className="w-4 h-4" /> +50.000</div>
            </div>
            <div 
             //to={`${!isCompleted? "https://twitter.com/TommydiLEE" : ""}`} 
            className={`text-lg text-[16px] flex justify-center px-3 items-center gap-3 text-white font-light py-3 rounded-xl shadow-lg border-[#ffffff33] border-2 ${isCompleted[1] ? "bg-[#2F9A21] cursor-not-allowed" : "bg-[#ffffff] bg-opacity-10 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10"}`}
              onClick={() => !isCompleted[1] ? handleLink(1) : ""}
            >
              follow our cto on X
              <div className="flex justify-center items-center gap-2"><img src="/image/Coin_small.png" className="w-4 h-4" /> +50.000</div>
            </div>
            <div 
            //to="https://x.com/nomadworld_ai/status/1814310835507937421" 
            className={`text-lg text-[16px] flex justify-center px-3 items-center gap-3 text-white font-light py-3 rounded-xl shadow-lg border-[#ffffff33] border-2 ${isCompleted[2] ? "bg-[#2F9A21] cursor-not-allowed" : "bg-[#ffffff] bg-opacity-10 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10"}`}
              onClick={() => !isCompleted[2] ? handleLink(2) : ""}
            >
              retweet, like, and reply to this tweet!
              <div className="flex justify-center items-center gap-2"><img src="/image/Coin_small.png" className="w-4 h-4" /> +50.000</div>
            </div>
            <div 
            //to="https://nomadworld.ai" 
            className={`text-lg text-[16px] flex justify-center px-3 items-center gap-3 text-white font-light py-3 rounded-xl shadow-lg border-[#ffffff33] border-2 ${isCompleted[3] ? "bg-[#2F9A21] cursor-not-allowed" : "bg-[#ffffff] bg-opacity-10 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10"}`}
              onClick={() => !isCompleted[3] ? handleLink(3) : ""}
            >
              visit our website
              <div className="flex justify-center items-center gap-2"><img src="/image/Coin_small.png" className="w-4 h-4" /> +50.000</div>
            </div>
            <div //to="https://www.tiktok.com/@nomadworld.ai" 
            className={`text-lg text-[16px] flex justify-center px-3 items-center gap-3 text-white font-light py-3 rounded-xl shadow-lg border-[#ffffff33] border-2 ${isCompleted[4] ? "bg-[#2F9A21] cursor-not-allowed" : "bg-[#ffffff] bg-opacity-10 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10"}`}
              onClick={() => !isCompleted[4] ? handleLink(4) : ""}
            >
              follow us on tiktok
              <div className="flex justify-center items-center gap-2"><img src="/image/Coin_small.png" className="w-4 h-4" /> +50.000</div>
            </div>
            <div //to="https://www.instagram.com/nomadworld.ai" 
            className={`text-lg text-[16px] flex justify-center px-3 items-center gap-3 text-white font-light py-3 rounded-xl shadow-lg border-[#ffffff33] border-2 ${isCompleted[5] ? "bg-[#2F9A21] cursor-not-allowed" : "bg-[#ffffff] bg-opacity-10 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10"}`}
              onClick={() => !isCompleted[5] ? handleLink(5) : ""}
            >
              follow us on instagram
              <div className="flex justify-center items-center gap-2"><img src="/image/Coin_small.png" className="w-4 h-4" /> +50.000</div>
            </div>
          </div>
        </>}
    </div>
  );
}
