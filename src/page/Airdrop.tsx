import axios from "axios";
import { useEffect, useState } from "react";

import { useGlobalContext } from "../context/GlobalContext";

export default function Airdrop() {
  const { user } = useGlobalContext();
  const [isCompleted, setIsCompleted] = useState<any>([false, false, false, false, false]);
  const backend = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    console.log("isCompleted: ", isCompleted);
  }, [isCompleted])
  const handleLink = (index: number) => {
    let newState = [...isCompleted];
    newState[index] = true;
    axios.post(`${backend}/task/set`, {
      telID: user.id,
      task: newState
    }).then(res => {
      console.log(res);
      setIsCompleted(newState);
    }).catch(error => console.error(error));
  }
  return (
    <div className="mx-10 max-sm:mx-0">
      <div className="text-2xl font-[600] max-sm:text-lg">complete daily actions<br /> for your chance to win blob</div>
      <div className="flex flex-col gap-6 max-sm:gap-4 my-10 max-sm:my-5">
        <div className={`text-lg text-[16px] font-light py-3 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10 rounded-xl bg-[#ffffff] bg-opacity-10 shadow-lg border-[#ffffff33] border-2 ${isCompleted[0] && "bg-[#212342]"}`}
          onClick={() => handleLink(0)}
        >
          follow us on X
        </div>
        <div className={`text-lg text-[16px] font-light py-3 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10 rounded-xl bg-[#ffffff] bg-opacity-10 shadow-lg border-[#ffffff33] border-2 ${isCompleted[1] && "bg-[#212342]"}`}
          onClick={() => handleLink(1)}
        >
          retweet, like, and reply to this tweet
        </div>
        <div className={`text-lg text-[16px] font-light py-3 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10 rounded-xl bg-[#ffffff] bg-opacity-10 shadow-lg border-[#ffffff33] border-2 ${isCompleted[2] && "bg-[#212342]"}`}
          onClick={() => handleLink(2)}
        >
          visit our website
        </div>
        <div className={`text-lg text-[16px] font-light py-3 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10 rounded-xl bg-[#ffffff] bg-opacity-10 shadow-lg border-[#ffffff33] border-2 ${isCompleted[3] && "bg-[#212342]"}`}
          onClick={() => handleLink(3)}
        >
          follow us on tiktok
        </div>
        <div className={`text-lg text-[16px] font-light py-3 cursor-pointer hover:bg-opacity-20 active:bg-opacity-10 rounded-xl bg-[#ffffff] bg-opacity-10 shadow-lg border-[#ffffff33] border-2 ${isCompleted[4] && "bg-[#212342]"}`}
          onClick={() => handleLink(4)}
        >
          follow us on instagram
        </div>
      </div>
    </div>
  );
}
