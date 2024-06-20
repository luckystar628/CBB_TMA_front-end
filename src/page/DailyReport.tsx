import { useEffect, useState } from "react";
import data from "../assets/questions.json";

export default function DailyReport() {
  const [todaysData, setTodaysData] = useState<any>({});
  const [selectedOption, setSelectedOption] = useState<number>(0);
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so we add 1 and pad with a zero if necessary
    const day = String(today.getDate()).padStart(2, "0"); // padStart ensures the day is two digits
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    if (data) {
      if ((data as any)[formattedDate]) {
        console.log((data as any)[formattedDate]);
        setTodaysData((data as any)[formattedDate]);
      }
    }
  }, []);
  return (
    <div className="p-8">
      <div className="text-2xl">{todaysData.question || "Loading..."}</div>
      <div className="gap-5 mt-5 flex flex-col ">
        {todaysData.options &&
          todaysData.options.map((option: string, index: number) => {
            return (
              <div
                key={index}
                className={`transition ease-in-out cursor-pointer p-5 rounded-xl border-[#ffffff33] border-2 ${
                  selectedOption === index ? "bg-[#1A1A1A] bg-opacity-100 border-[#1A1A1A]" : "bg-[#625f63] bg-opacity-30"
                }`}
                onClick={() => setSelectedOption(index)}
              >
                {option}
              </div>
            );
          })}
      </div>
      <div className="mt-10 text-center bg-white py-5 rounded-md hover:opacity-80 active:opacity-50 text-black cursor-pointer">
        submit
      </div>
    </div>
  );
}
