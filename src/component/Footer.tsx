import { useNavigate, useLocation } from "react-router-dom"
export default function Footer() {
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <div className="flex justify-center gap-8 text-black">
      <div className={`flex flex-col w-20 cursor-pointer items-center shadow-md justify-center py-2 rounded-md ${location.pathname === '/daily' ? 'bg-white bg-opacity-60 border-white' : 'bg-white bg-opacity-10 '}`} onClick={() => navigate('/daily')}>
        <img src="/image/circle-question.svg" alt="logo" className="w-8 h-8" />
        <div className="text-md font-[600] mt-1">daily</div>
      </div>
      <div className={`flex flex-col w-20 cursor-pointer items-center shadow-md justify-center py-2 px-5 rounded-md ${location.pathname === '/rank' ? 'bg-white bg-opacity-60 border-white' : 'bg-white bg-opacity-10 '}`} onClick={() => navigate('/rank')}>
        <img src="/image/ranking-star.svg" alt="logo" className="w-8 h-8" />
        <div className="text-md font-[600] mt-1">rank</div>
      </div>
      <div className={`flex flex-col w-20 cursor-pointer items-center shadow-md justify-center py-2 px-5 rounded-md ${location.pathname === '/friends' ? 'bg-white bg-opacity-60 border-white' : 'bg-white bg-opacity-10 '}`} onClick={() => navigate('/friends')}>
        <img src="/image/user-group.svg" alt="logo" className="w-8 h-8" />
        <div className="text-md font-[600] mt-1">friends</div>
      </div>
      <div className={`flex flex-col w-20 cursor-pointer items-center shadow-md justify-center py-2 px-5 rounded-md ${location.pathname === '/airdrop' ? 'bg-white bg-opacity-60 border-white' : 'bg-white bg-opacity-10 '}`} onClick={() => navigate('/airdrop')}>
        <img src="/image/vector-4.svg" alt="logo" className="w-8 h-8" />
        <div className="text-md font-[600] mt-1">airdrop</div>
      </div>
    </div>
  )
}
