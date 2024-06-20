import { useState, useEffect } from "react";
import { rankingList } from "../assets/const";
import ShareReferral from "../component/ShareReferral";
export default function Ranking() {
  const [tab, setTab] = useState(0);
  const [user, setUser] = useState<any>({});
  const handleTab = (index: number) => {
    setTab(index);
  };
  useEffect(() => {
    const newUser = rankingList.find(
      (item) => item.username === "@currentuser"
    );
    setUser(newUser);
  }, []);
  return (
    <>
      <div className="mx-10 max-sm:mx-0 mt-10 max-sm:mt-2 py-3 max-sm:py-2 rounded-md bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2">
        leaderboard
      </div>
      <ul className="mx-10 max-sm:mx-0 mt-2 max-sm:text-[14px] flex justify-between items-center rounded-2xl bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2">
        <li
          className={`${
            tab === 0 && "bg-[#D5A9EF] bg-opacity-40"
          } rounded-xl py-3 max-sm:py-1 px-5 max-sm:px-2 cursor-pointer`}
          onClick={() => handleTab(0)}
        >
          today
        </li>
        <li
          className={`${
            tab === 1 && "bg-[#D5A9EF] bg-opacity-40"
          } rounded-xl py-3 max-sm:py-1 px-5 max-sm:px-2 cursor-pointer`}
          onClick={() => handleTab(1)}
        >
          this week
        </li>
        <li
          className={`${
            tab === 2 && "bg-[#D5A9EF] bg-opacity-40"
          } rounded-xl py-3 max-sm:py-1 px-5 max-sm:px-2 cursor-pointer`}
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
      </ul>
      <div className="mx-10 max-sm:mx-0 overflow-auto scrollbar-hidden my-2">
        {tab == 0
          ? rankingList.map((item, index) => (
              <div
                className={`flex justify-between items-center mx-5 p-3 ${
                  item.username === user.username &&
                  "rounded-2xl bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2"
                }`}
              >
                <div>
                  <span className="mr-3">{index + 1}.</span>
                  <span>{item.username}</span>
                </div>
                <span>{item.score ? `${item.score} coins` : ""}</span>
              </div>
            ))
          : tab == 1
          ? rankingList.map((item, index) => (
              <div
                className={`flex justify-between items-center mx-5 p-3 ${
                  item.username === user.username &&
                  "rounded-2xl bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2"
                }`}
              >
                <div>
                  <span className="mr-3">{index + 1}.</span>
                  <span>{item.username}</span>
                </div>
                <span>{item.score ? `${item.score} coins` : ""}</span>
              </div>
            ))
          : tab == 2
          ? rankingList.map((item, index) => (
              <div
                className={`flex justify-between items-center mx-5 p-3 ${
                  item.username === user.username &&
                  "rounded-2xl bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2"
                }`}
              >
                <div>
                  <span className="mr-3">{index + 1}.</span>
                  <span>{item.username}</span>
                </div>
                <span>{item.score ? `${item.score} coins` : ""}</span>
              </div>
            ))
          : tab == 3
          ? rankingList.map((item, index) => (
              <div
                className={`flex justify-between items-center mx-5 p-3 ${
                  item.username === user.username &&
                  "rounded-2xl bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2"
                }`}
              >
                <div>
                  <span className="mr-3">{index + 1}.</span>
                  <span>{item.username}</span>
                </div>
                <span>{item.score ? `${item.score} coins` : ""}</span>
              </div>
            ))
          : rankingList.map((item, index) => (
              <div
                className={`flex justify-between items-center mx-5 p-3 ${
                  item.username === user.username &&
                  "rounded-2xl bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2"
                }`}
              >
                <div>
                  <span className="mr-3">{index + 1}.</span>
                  <span>{item.username}</span>
                </div>
                <span>{item.score ? `${item.score} coins` : ""}</span>
              </div>
            ))}
      </div>
      <div className="mb-10 max-sm:mx-0 mx-10">
        <ShareReferral />
      </div>
    </>
  );
}
