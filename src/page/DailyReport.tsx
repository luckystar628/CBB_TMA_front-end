import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import axios from "axios";
import LoadingPage from "./Loading";
import ShareReferral from "../component/ShareReferral";

export default function DailyReport() {
  const { user } = useGlobalContext();
  const {questionCounter, setQuestionCounter } = useGlobalContext();
  const backend = import.meta.env.VITE_BACKEND_URL;
  const [todaysData, setTodaysData] = useState<any>({});
  const [selectedOption, setSelectedOption] = useState<number>(-1);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [time, setTime] = useState<number>(0);
  const [questions, setQuestions] = useState<any>([]);
  const [istigger, setIsTigger] = useState<boolean>(false);
  const [index, setIndex] = useState(0);
  const timeRef: any = useRef();
  useEffect(() => {
    getQuestion();
  }, [])
  const getQuestion = async () => {
    await axios.get(`${backend}/question/get/${user.id}`).then(async (res: any) => {
      setLoading(false);
      if (res.data) {
        console.log(res.data.questions);
        setQuestions(res.data.questions);
        setTodaysData(questions[index]);
        console.log(questions);
        console.log(todaysData);
        setIsTigger(true);
      }
    }).catch((err: any) => {
      setLoading(false);
      setIsCompleted(true);
      console.log(err);
    });
  }
  //
  useEffect(() => {
    if (istigger) {
      if (time > 5000) {
        if (index > questions.length - 1) { setIsCompleted(true); setIsTigger(false); }
        setIndex(index => index + 1);
        setTodaysData(questions[index]);
        setSelectedOption(-1);
        setTime(0);
        console.log(todaysData);
      }
      if (time <= 5000) {
        timeRef.current = setTimeout(() => {
          setTime(time => time + 1);
        }, 30);
      }

    }

  });
  const handleSubmit = async () => {
    setQuestionCounter(questionCounter + 1);
    clearTimeout(timeRef.current);
    axios
      .post(`${backend}/question/setresult`, {
        telID: user.id,
        date: todaysData.date,
        question: todaysData.question,
        result: todaysData.options[selectedOption],
      })
      .then((res: any) => {
        console.log("res", res);
        if (index === questions.length - 1) { setIsCompleted(true); }
      })
      .catch((err: any) => {
        console.log("err", err);
      });
    setTime(5000);
  };
  if (loading) return <LoadingPage />;
  return (
    <div className="px-8 py-2 max-sm:px-0">
      {isCompleted ? (
        <>
          <div className="flex flex-col gap-10 max-sm:gap-6 justify-center h-[300px] ">
            <div className="text-xl font-[600]">
              congratulations! you earned <br />
              <span className="text-2xl font-bold">{questionCounter * 5000} coins</span>
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
          {!todaysData ? <LoadingPage /> :
            <>
              <div className="flex flex-col justify-center items-center">
                <img src="image/clock.svg" className="h-6 w-6" alt="clock" />
                <div className="w-[80%] h-4 m-4 bg-transparent rounded-lg">
                  <div className={`h-4  bg-[#D5A9EF] rounded-lg float-right transition duration-75`} style={{ width: `${100 - time}%` }} />
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
                          onClick={() => { setSelectedOption(index); clearTimeout(timeRef.current); }}
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
          }
        </>
      )}
    </div>
  );
}
