import { useState } from "react";
export default function ShareReferral() {
  const [, setIsClicked] = useState<boolean>(false);
  return <div className="py-8 max-sm:py-5 bg-white rounded-lg text-black cursor-pointer hover:bg-opacity-60 active:bg-opacity-50" onClick={() => setIsClicked(true) }>share to earn 1 coin per referral</div>;
}
