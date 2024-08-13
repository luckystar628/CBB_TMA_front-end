import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import axios from "axios";
import LoadingPage from "./Loading";
import ShareReferral from "../component/ShareReferral";

export default function DailyReport() {
  const { user } = useGlobalContext();
  const backend = import.meta.env.VITE_BACKEND_URL;
  const [todaysData, setTodaysData] = useState<any>({});
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [isQuations, setIsQuations] = useState<boolean>(true);
  const [time, setTime] = useState<number>(0);
  // useEffect(() => {
  //   // Define the function you want to execute
  //   const myFunction = () => {
  //     if(isQuations === false)
  //   };
  //   // Set up the interval to call myFunction every 3 seconds
  //   const intervalId = setInterval(myFunction, 3000);
  //   // Cleanup function to clear the interval when the component unmounts
  //   if(isQuations === false) clearInterval(intervalId);
  // }, []);
  useEffect(() =>{
    if(isQuations === true)
      {
        setTimeout(() => {
          axios.get(`${backend}/question/get/${user.id}`).then((res: any) => {
            setTime(0);
            setLoading(false);
            res.data && setTodaysData(res.data.question);
            res.data && setIsQuations(res.data.isQuation);
          }).catch((err: any) => {
            setLoading(false);
            setIsCompleted(true);
            console.log(err);
          });
      }, 3000)
    }
  })
  useEffect(() => {
    if (time <= 100)
      setTimeout(() => {
        setTime(time + 1);
      }, 30);
  })
  const handleSubmit = async () => {
    axios
      .post(`${backend}/question/setresult`, {
        telID: user.id,
        date: todaysData.date,
        question: todaysData.question,
        result: todaysData.options[selectedOption],
      })
      .then((res: any) => {
        console.log("res", res);
        if (isQuations === false)
          setIsCompleted(true);
      })
      .catch((err: any) => {
        console.log("err", err);
      });
  };
  if (loading) return <LoadingPage />;
  return (
    <div className="px-8 py-2 max-sm:px-0">
      {isCompleted ? (
        <>
          <div className="flex flex-col gap-10 max-sm:gap-6 justify-center h-[300px] ">
            <div className="text-xl font-[600]">
              congratulations! you earned <br />
              <span className="text-2xl font-bold">5000 coins</span>
            </div>
            <div className="text-xl font-[600]">thank you for your response!</div>
            <div className="font-light text-xl">
              your insights are shaping a bordreless world with equal
              opportunities for all
            </div>
            <div className="text-2xl">
              come back tomorrow for another question!
            </div>
          </div>
          <ShareReferral />
        </>
      ) : (
        <>
          <div className="flex justify-center">
            <div className="w-[80%] h-4 bg-gray-600 rounded-lg">
              <div className={`h-4 bg-[#D5A9EF] rounded-lg`} style={{ width: `${time}%` }} />
            </div>
          </div>
          <div className="text-2xl max-sm:text-[16px]">
            {todaysData ? todaysData.question : "Loading..."}
          </div>
          <div className="gap-5 mt-5 flex flex-col overflow-auto h-[300px] scrollbar-hidden">
            {todaysData &&
              todaysData.options &&
              todaysData.options.map(
                (option: string, index: number) => {
                  return (
                    <div
                      key={index}
                      className={`max-sm:text-[14px] transition shadow-lg ease-in-out cursor-pointer py-5 max-sm:py-3 rounded-xl border-2 hover:bg-opacity-60 active:bg-opacity-50 ${selectedOption === index
                        ? "bg-[#1A1A1A] bg-opacity-100 border-[#1A1A1A]"
                        : "bg-[#625f63] bg-opacity-30 border-[#ffffff33]"
                        }`}
                      onClick={() => setSelectedOption(index)}
                    >
                      {option}
                    </div>
                  );
                }
              )}
          </div>
          <div
            className="mt-10 max-sm:mt-5 py-8 max-sm:py-5 text-center bg-white rounded-md hover:opacity-80 active:opacity-50 text-black cursor-pointer"
            onClick={() => handleSubmit()}
          >
            submit
          </div>
        </>
      )}
    </div>
  );
}
