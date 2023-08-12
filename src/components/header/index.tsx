//import hooks
import { useState } from "react";
//import icons
import { AiOutlineTwitter } from "react-icons/ai";

const Header = () => {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <header className="header py-4 md:py-6">
      <div className="max-w-[90%] mx-auto">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-white text-2xl font-orbitron transition md:text-3xl"
          >
            Quart<span className="text-green-500">ex</span>
          </a>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            <a
              href="https://x.com"
              target="_blank"
              className="text-green-500 text-xl transition md:text-xl"
            >
              <AiOutlineTwitter />
            </a>
            <button
              className="text-green-500 font-orbitron transition cursor-pointer hover:text-white md:text-xl"
              onClick={() => setIsConnected((prev) => !prev)}
            >
              {isConnected ? "0x921f8...FD6" : "Connect Wallet"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
