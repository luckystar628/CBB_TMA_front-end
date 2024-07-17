import ShareReferral from "../component/ShareReferral";
// import { initUtils } from "@tma.js/sdk";

import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

import axios from "axios"

export default function Friends() {
  const { user } = useGlobalContext();
  // const utils = initUtils();
  const backend = import.meta.env.VITE_BACKEND_URL;
  // const openTelegram = () => {
  //   utils.openTelegramLink(
  //     `https://t.me/share/url?url=https://t.me/catizenbot/gameapp?startapp=rp_1365932&text=%F0%9F%92%B0Catizen%3A%20Unleash%2C%20Play%2C%20Earn%20-%20Where%20Every%20Game%20Leads%20to%20an%20Airdrop%20Adventure!%0A%F0%9F%8E%81Let%27s%20play-to-earn%20airdrop%20right%20now!`
  //   );
  // }
  const [rankingList, setRankingList] = useState<any>([]);

  useEffect(() => {
    axios.post(`${backend}/friend/get`, {telID: user.id}).then(res => {
      console.log(res.data.friends);
      setRankingList(res.data.friends);
    }).catch((error) => console.error(error))
  }, [])

  const shareTelegram = (username: string) => {
    // const url = "https://t.me/hiccup2735";
    // const text = "Look! Some cool app here!"
    // utils.openTelegramLink(
    //   `https://t.me/${username}?text=Look%21%20Some%20cool%20app%20here!`
    // );
    // utils.shareURL("https://t.me/mybot/myapp", "Look! Some cool app here!");

    const text = encodeURIComponent("You did not answer the Nomad daily question today! Answer to climb the ranks and be rewarded by our airdrop.");
    const url = `https://t.me/${username}?text=${text}`;
    window.open(url, '_blank');
  };

  // const [tab, setTab] = useState(0);
  // const handleTab = (index: number) => {
  //   setTab(index);
  // };
  return (
    <>
      <div className="mx-10 max-sm:mx-0 mt-10 max-sm:mt-2 py-3 max-sm:py-2 rounded-md bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2">
        friends
      </div>
      {/* <ul className="mx-10 max-sm:mx-0 mt-2 max-sm:text-[14px] flex justify-between items-center rounded-2xl bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2">
        <li
          className={`${
            tab === 0 && "bg-[#D5A9EF] bg-opacity-40"
          } rounded-xl py-3 px-5 max-sm:py-1 max-sm:px-2 cursor-pointer`}
          onClick={() => handleTab(0)}
        >
          today
        </li>
        <li
          className={`${
            tab === 1 && "bg-[#D5A9EF] bg-opacity-40"
          } rounded-xl py-3 px-5 max-sm:py-1 max-sm:px-2 cursor-pointer`}
          onClick={() => handleTab(1)}
        >
          this week
        </li>
        <li
          className={`${
            tab === 2 && "bg-[#D5A9EF] bg-opacity-40"
          } rounded-xl py-3 px-5 max-sm:py-1 max-sm:px-2 cursor-pointer`}
          onClick={() => handleTab(2)}
        >
          this month
        </li>
        <li
          className={`${
            tab === 3 && "bg-[#D5A9EF] bg-opacity-40"
          } rounded-xl py-3 px-5 max-sm:py-1 max-sm:px-2 cursor-pointer`}
          onClick={() => handleTab(3)}
        >
          all-time
        </li>
      </ul> */}
      <div className="mx-10 max-sm:mx-0 overflow-auto scrollbar-hidden my-2">
        {rankingList.map((item: any, index: number) => (
          <div className="flex items-center">
            <div
              className={`flex w-full justify-between items-center mx-5 p-3 ${
                item.username === user.username &&
                "rounded-2xl bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2"
              }`}
            >
              <div>
                <span className="mr-3">{index + 1}.</span>
                <span>{item.username}</span>
              </div>
              <span>
                {item.score > 1 ? `${item.score} coins` : `${item.score} coin` }
              </span>
            </div>
            <img
              src={
                item.isInvited
                  ? "/image/icon-checked.svg"
                  : "/image/icon-telegram.svg"
              }
              alt="avatar"
              className={`mx-5 max-sm:ml-0 w-6 h-6 ${
                !item.isInvited && "cursor-pointer"
              }`}
              onClick={() => {
                !item.isInvited && shareTelegram(item.username);
              }}
            />
          </div>
        ))}
      </div>
      <div className="mb-10 mx-10 max-sm:mx-0">
        <ShareReferral />
      </div>
    </>
  );
}
