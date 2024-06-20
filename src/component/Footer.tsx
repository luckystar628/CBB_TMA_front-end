import { useNavigate, useLocation } from "react-router-dom"
export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <div className="flex justify-around gap-5">
      <div className={`flex flex-col w-20 cursor-pointer items-center justify-center py-2 px-4 rounded-md bg-white bg-opacity-10 ${location.pathname === '/daily' ? 'bg-[#1A1A1A] bg-opacity-100 border-[#1A1A1A]' : ''}`} onClick={() => navigate('/daily')}>
        <img src="/image/circle-question.svg" alt="logo" className="w-8 h-8" />
        <div className="text-md font-light mt-1">daily</div>
      </div>
      <div className={`flex flex-col w-20 cursor-pointer items-center justify-center py-2 px-4 rounded-md bg-white bg-opacity-10 ${location.pathname === '/rank' ? 'bg-[#1A1A1A] bg-opacity-100 border-[#1A1A1A]' : ''}`} onClick={() => navigate('/rank')}>
        <img src="/image/ranking-star.svg" alt="logo" className="w-8 h-8" />
        <div className="text-md font-light mt-1">rank</div>
      </div>
      <div className={`flex flex-col w-20 cursor-pointer items-center justify-center py-2 px-4 rounded-md bg-white bg-opacity-10 ${location.pathname === '/friends' ? 'bg-[#1A1A1A] bg-opacity-100 border-[#1A1A1A]' : ''}`} onClick={() => navigate('/friends')}>
        <img src="/image/user-group.svg" alt="logo" className="w-8 h-8" />
        <div className="text-md font-light mt-1">friends</div>
      </div>
      <div className={`flex flex-col w-20 cursor-pointer items-center justify-center py-2 px-4 rounded-md bg-white bg-opacity-10 ${location.pathname === '/airdrop' ? 'bg-[#1A1A1A] bg-opacity-100 border-[#1A1A1A]' : ''}`} onClick={() => navigate('/airdrop')}>
        <img src="/image/vector-4.svg" alt="logo" className="w-8 h-8" />
        <div className="text-md font-light mt-1">airdrop</div>
      </div>
    </div>
  )
}
