//importing locations
import { useLocation } from "react-router-dom";
//import icons
import { AiOutlineTwitter } from "react-icons/ai";

const Header = () => {
  const location = useLocation();
  const pathname: string = location.pathname;
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
            {pathname !== "/launchpad" && (
              <a
                href="/launchpad"
                className="text-green-500 font-orbitron transition cursor-pointer hover:text-white md:text-xl"
              >
                Launchpad
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
