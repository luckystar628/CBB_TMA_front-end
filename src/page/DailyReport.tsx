import { useEffect, useState } from "react";
import ShareReferral from "../component/ShareReferral";
import axios from "axios";

export default function DailyReport() {
  const backend = import.meta.env.VITE_BACKEND_URL;

  const [todaysData, setTodaysData] = useState<any>({});
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  useEffect(() => {
    axios.get(`${ backend }/question/get`).then((res) => {
      setTodaysData(res.data);
    })
  }, []);
  return (
    <div className="px-8 py-2 max-sm:px-0 grow">
      {isCompleted ? (
        <div className="flex flex-col gap-10 max-sm:gap-6">
          <div className="text-xl font-[600]">
            congratulations! you earned <br />
            <span className="text-2xl font-bold">3 coins</span>
          </div>
          <div className="text-xl font-[600]">thank you for your response!</div>
          <div className="font-light text-xl">
            your insights are shaping a bordreless world with equal
            opportunities for all
          </div>
          <div className="text-2xl">
            come back tomorrow for another question!
          </div>
          <ShareReferral />
        </div>
      ) : (
        <>
          {" "}
          <div className="text-2xl max-sm:text-[16px]">{todaysData.question || "Loading..."}</div>
          <div className="gap-5 mt-5 flex flex-col overflow scrollbar-hidden">
            {todaysData.question.options &&
              todaysData.question.options.map((option: string, index: number) => {
                return (
                  <div
                    key={index}
                    className={`max-sm:text-[14px] transition shadow-lg ease-in-out cursor-pointer py-5 max-sm:py-3 rounded-xl border-2 hover:bg-opacity-60 active:bg-opacity-50 ${
                      selectedOption === index
                        ? "bg-[#1A1A1A] bg-opacity-100 border-[#1A1A1A]"
                        : "bg-[#625f63] bg-opacity-30 border-[#ffffff33]"
                    }`}
                    onClick={() => setSelectedOption(index)}
                  >
                    {option}
                  </div>
                );
              })}
          </div>
          <div
            className="mt-10 max-sm:mt-5 max-sm:py-3 text-center bg-white py-5 rounded-md hover:opacity-80 active:opacity-50 text-black cursor-pointer"
            onClick={() => setIsCompleted(true)}
          >
            submit
          </div>
        </>
      )}
      
    </div>
  );
}
