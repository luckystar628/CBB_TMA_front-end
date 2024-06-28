import { initUtils } from "@tma.js/sdk";
import { useGlobalContext } from "../context/GlobalContext";
export default function ShareReferral() {
  const { user } = useGlobalContext();
  const utils = initUtils();
  const text = `Hello, Welcome to nomad!`;
  const textEncoded = encodeURIComponent(text);
  const openTelegram = () => {
    utils.openTelegramLink(
      `https://t.me/share/url?url=https://t.me/Go_game_dev_bot?start=${user.id}&text=${textEncoded}`
    );
  };
  return (
    <div
      className="py-8 max-sm:py-5 bg-white rounded-lg text-black cursor-pointer hover:bg-opacity-60 active:bg-opacity-50"
      onClick={() => openTelegram()}
    >
      share to earn 1 coin per referral
    </div>
  );
}
