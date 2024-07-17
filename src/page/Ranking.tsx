import { useState, useEffect } from "react";
import ShareReferral from "../component/ShareReferral";
import { useGlobalContext } from "../context/GlobalContext";
import axios from "axios";

export default function Ranking() {
  const { user } = useGlobalContext();
  const backend = import.meta.env.VITE_BACKEND_URL;
  const [tab, setTab] = useState(0);
  const [rankingList, setRankingList] = useState<any>([]);
  const handleTab = (index: number) => {
    setTab(index);
  };

  const [currentUser, setCurrentUser] = useState<any>({});

  useEffect(() => {
    fetchRankingData(tab);
  }, [tab]);

  const fetchRankingData = async (tab: number) => {
    axios
      .get(
        `${backend}/rank/${
          tab === 0
            ? "today"
            : tab === 1
            ? "thisweek"
            : tab === 2
            ? "thismonth"
            : "alltime"
        }`
      )
      .then((res: any) => {
        console.log(res);
        setRankingList(res.data.result);
        res.data.result.map((item: any, index: number) => {
          if (item.username === user.username) {
            setCurrentUser({ ...item, rank: index + 1 });
          }
        });
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

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
        {tab == 0 && rankingList.length > 0 ? (
          rankingList.map((item: any, index: any) => (
            <div
              className={`flex justify-between items-center mx-5 p-3 ${
                item.username == user.username &&
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
        ) : tab == 1 && rankingList.length > 0 ? (
          rankingList.map((item: any, index: any) => (
            <div
              className={`flex justify-between items-center mx-5 p-3 ${
                item.username == user.username &&
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
        ) : tab == 2 && rankingList.length > 0 ? (
          rankingList.map((item: any, index: any) => (
            <div
              className={`flex justify-between items-center mx-5 p-3 ${
                item.username == user.username &&
                "rounded-2xl bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2"
              }`}
            >
              <div>
                <span className="mr-3">{index + 1}.</span>
                <span>{item.username}</span>
              </div>
              <span>
                {item.score && item.score > 1
                  ? `${item.score} coins`
                  : item.score && item.score < 1
                  ? `${item.score} coin`
                  : ""}
              </span>
            </div>
          ))
        ) : tab == 3 && rankingList.length > 0 ? (
          rankingList.map((item: any, index: any) => (
            <div
              className={`flex justify-between items-center mx-5 p-3 ${
                item.username == user.username &&
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
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div>
        {currentUser && (
          <div
            className={`flex justify-between items-center mx-5 p-3 rounded-2xl bg-[#232124] bg-opacity-30 border-[#ffffff33] border-2 mb-1`}
          >
            <div>
              <span className="mr-3">{currentUser.rank}.</span>
              <span>{currentUser.username}</span>
            </div>
            <span>
              {currentUser.score && currentUser.score > 1
                ? `${currentUser.score} coins`
                : currentUser.score && currentUser.score < 1
                ? `${currentUser.score} coin`
                : ""}
            </span>
          </div>
        )}
      </div>
      <div className="mb-10 max-sm:mx-0 mx-10">
        <ShareReferral />
      </div>
    </>
  );
}
