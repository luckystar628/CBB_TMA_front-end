import axios from "axios";
import { useEffect, useState } from "react";

import { useGlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

export default function Airdrop() {
  const { user } = useGlobalContext();
  const [isCompleted, setIsCompleted] = useState<any>([false, false, false, false, false]);
  const backend = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    getState()
  }, [])
  
  const handleLink = async (index: number) => {
    let newState = [...isCompleted];
    newState[index] = true;
    console.log(newState);
    axios.post(`${backend}/task/set`, {
      telID: user.id,
      task: newState
    }).then(res => {
      console.log(res);
      setIsCompleted(newState);
    }).catch(error => console.error(error));
  }

  const getState = async () => {
    axios.post(`${backend}/task/get`, {
      telID: user.id
    }).then(res => {
      console.log(res);
      setIsCompleted(res.data.task.task);
    }).catch(err => console.error(err))
  }
  
  return (
    <div className="mx-10 max-sm:mx-0">
      <div className="text-2xl font-[600] max-sm:text-lg">complete daily actions<br /> for your chance to win blob</div>
      <div className="flex flex-col gap-6 max-sm:gap-4 my-10 max-sm:my-5 overflow-auto">
        <Link to="https://twitter.com/nomadworld_ai" className={`text-lg text-[16px] font-light py-3 rounded-xl shadow-lg border-[#ffffff33] border-2 ${isCompleted[0] ? "bg-[#2F9A21] cursor-not-allowed" : "bg-[#ffffff] bg-opacity-10 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10"}`}
          onClick={() => !isCompleted[0] && handleLink(0)}
        >
          follow us on X
          <div className="flex"><img src="/image/coin.svg" /> +1</div>
        </Link>
        <Link to="https://twitter.com/nomadworld_ai" className={`text-lg text-[16px] font-light py-3 rounded-xl shadow-lg border-[#ffffff33] border-2 ${isCompleted[1] ? "bg-[#2F9A21] cursor-not-allowed" : "bg-[#ffffff] bg-opacity-10 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10"}`}
          onClick={() => !isCompleted[1] && handleLink(1)}
        >
          retweet, like, and reply to this tweet
          <div className="flex"><img src="/image/coin.svg" /> +1</div>
        </Link>
        <Link to="https://nomadworld.ai" className={`text-lg text-[16px] font-light py-3 rounded-xl shadow-lg border-[#ffffff33] border-2 ${isCompleted[2] ? "bg-[#2F9A21] cursor-not-allowed" : "bg-[#ffffff] bg-opacity-10 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10"}`}
          onClick={() => !isCompleted[2] && handleLink(2)}
        >
          visit our website
          <div className="flex"><img src="/image/coin.svg" /> +1</div>
        </Link>
        <Link to="https://www.tiktok.com/@nomadworld.ai" className={`text-lg text-[16px] font-light py-3 rounded-xl shadow-lg border-[#ffffff33] border-2 ${isCompleted[3] ? "bg-[#2F9A21] cursor-not-allowed" : "bg-[#ffffff] bg-opacity-10 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10"}`}
          onClick={() => !isCompleted[3] && handleLink(3)}
        >
          follow us on tiktok
          <div className="flex"><img src="/image/coin.svg" /> +1</div>
        </Link>
        <Link to="https://www.instagram.com/nomadworld.ai" className={`text-lg text-[16px] font-light py-3 rounded-xl shadow-lg border-[#ffffff33] border-2 ${isCompleted[4] ? "bg-[#2F9A21] cursor-not-allowed" : "bg-[#ffffff] bg-opacity-10 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10"}`}
          onClick={() => !isCompleted[4] && handleLink(4)}
        >
          follow us on instagram
          <div className="flex"><img src="/image/coin.svg" /> +1</div>
        </Link>
      </div>
    </div>
  );
}
