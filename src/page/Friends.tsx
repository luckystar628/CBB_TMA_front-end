import { useGlobalContext } from "../context/GlobalContext";
import { useEffect, useState } from "react";

import axios from "axios"
import LoadingPage from "./Loading";

export default function Friends() {
  const { user } = useGlobalContext();
  // const utils = initUtils();
  const backend = import.meta.env.VITE_BACKEND_URL;
  const [loading, setLoading] = useState(true);
  // const openTelegram = () => {
  //   utils.openTelegramLink(
  //     `https://t.me/share/url?url=https://t.me/catizenbot/gameapp?startapp=rp_1365932&text=%F0%9F%92%B0Catizen%3A%20Unleash%2C%20Play%2C%20Earn%20-%20Where%20Every%20Game%20Leads%20to%20an%20Airdrop%20Adventure!%0A%F0%9F%8E%81Let%27s%20play-to-earn%20airdrop%20right%20now!`
  //   );
  // }
  const [rankingList, setRankingList] = useState<any>([]);

  useEffect(() => {
    axios.post(`${backend}/friend/get`, {telID: user.id}).then(res => {
      setLoading(false);
      setRankingList(res.data.friends);
    }).catch((error) => console.log(error))
  }, [])

  const shareTelegram = (username: string) => {
    // const url = "https://t.me/hiccup2735";
    // const text = "Look! Some cool app here!"
    // utils.openTelegramLink(
    //   `https://t.me/${username}?text=Look%21%20Some%20cool%20app%20here!`
    // );
    // utils.shareURL("https://t.me/mybot/myapp", "Look! Some cool app here!");
    axios.post(`${backend}/friend/invite`, {userId: user.id, username: user.username, friendname:username}).then(res => {
      console.log(res.data);
    }).catch((error) => {console.log(error); });
    const text = encodeURIComponent("You did not answer the Nomad daily question today! Answer to climb the ranks and be rewarded by our airdrop.");
    const url = `https://t.me/${username}?text=${text}`;
    window.open(url, '_blank', 'width=400,height=500');
    
    // window.open(`https://t.me/share/url?url=https://t.me/nomaddailybot?start=${user.id}&text=${textEncoded}`, '_blank', 'width=400,height=500');
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
      <div className="mx-10 max-sm:mx-0 overflow-auto scrollbar-hidden my-2 h-[350px]">
        {loading ? <div className="flex justify-center items-center h-full"><LoadingPage /></div>:""}
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
    </>
  );
}
