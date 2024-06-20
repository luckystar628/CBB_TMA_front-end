import { useNavigate, useLocation } from "react-router-dom"
export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <div className="flex justify-center gap-8 max-sm:justify-around max-sm:gap-0 text-black">
      <div className={`flex flex-col w-20 max-sm:w-16 cursor-pointer items-center shadow-lg justify-center py-2 rounded-xl ${location.pathname === '/daily' ? 'bg-white bg-opacity-60 border-white' : 'bg-white bg-opacity-10 '}`} onClick={() => navigate('/daily')}>
        <img src="/image/circle-question.svg" alt="logo" className="w-8 h-8 max-sm:w-6 max-sm:h-6" />
        <div className="text-md font-[600] mt-1 max-sm:mt-0 max-sm:text-[14px]">daily</div>
      </div>
      <div className={`flex flex-col w-20 max-sm:w-16 cursor-pointer items-center shadow-lg justify-center py-2 px-5 rounded-xl ${location.pathname === '/rank' ? 'bg-white bg-opacity-60 border-white' : 'bg-white bg-opacity-10 '}`} onClick={() => navigate('/rank')}>
        <img src="/image/ranking-star.svg" alt="logo" className="w-8 h-8 max-sm:w-6 max-sm:h-6" />
        <div className="text-md font-[600] mt-1 max-sm:mt-0 max-sm:text-[14px]">rank</div>
      </div>
      <div className={`flex flex-col w-20 max-sm:w-16 cursor-pointer items-center shadow-lg justify-center py-2 px-5 rounded-xl ${location.pathname === '/friends' ? 'bg-white bg-opacity-60 border-white' : 'bg-white bg-opacity-10 '}`} onClick={() => navigate('/friends')}>
        <img src="/image/user-group.svg" alt="logo" className="w-8 h-8 max-sm:w-6 max-sm:h-6" />
        <div className="text-md font-[600] mt-1 max-sm:mt-0 max-sm:text-[14px]">friends</div>
      </div>
      <div className={`flex flex-col w-20 max-sm:w-16 cursor-pointer items-center shadow-lg justify-center py-2 px-5 rounded-xl ${location.pathname === '/airdrop' ? 'bg-white bg-opacity-60 border-white' : 'bg-white bg-opacity-10 '}`} onClick={() => navigate('/airdrop')}>
        <img src="/image/vector-4.svg" alt="logo" className="w-8 h-8 max-sm:w-6 max-sm:h-6" />
        <div className="text-md font-[600] mt-1 max-sm:mt-0 max-sm:text-[14px]">airdrop</div>
      </div>
    </div>
  )
}
