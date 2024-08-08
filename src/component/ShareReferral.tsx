import { initUtils } from "@tma.js/sdk"; // Import initUtils from the SDK
import { useGlobalContext } from "../context/GlobalContext"; // Import the useGlobalContext hook

export default function ShareReferral() {
  const { user } = useGlobalContext(); // Get the user object from the global context
  const utils = initUtils(); // Initialize utils from the SDK

  const airplaneEmoji = '\u2708\uFE0F'; // ✈️
  const suitcaseEmoji = '\uD83D\uDCF2'; // 🛄
  const trophyEmoji = '\uD83C\uDFC6'; // 🏆

  const customText = `🌍 Discover Nomad, the Web3 travel project connecting experiences and Web3!! ${airplaneEmoji}\n\n
${suitcaseEmoji} Climb the leaderboard to participate in one of the biggest airdrops of the decade! ${trophyEmoji}`; // Your custom SEO text
  const textEncoded = encodeURIComponent(customText); // Encode the custom text for the URL

  // Function to open the Telegram link
  const openTelegram = () => {
    utils.openTelegramLink(
      `https://t.me/share/url?url=https://t.me/nomaddailybot?start=${user.id}&text=${textEncoded}` // Use the custom encoded text
    );
  };

  return (
    <div
      className="py-8 max-sm:py-5 bg-white rounded-lg text-black cursor-pointer hover:bg-opacity-60 active:bg-opacity-50"
      onClick={() => openTelegram()} // Add onClick event to call openTelegram
    >
      share to earn 2000 coins per referral
    </div>
  );
}
