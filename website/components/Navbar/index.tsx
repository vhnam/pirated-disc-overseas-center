import clsx from "clsx";
import Link from "next/link";

import config from "../../utils/config";

const Navbar = () => {
  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0",
        "flex items-center justify-between align-center",
        "p-4 bg-black text-2xl z-10"
      )}
    >
      <Link href={config.paths.homepage}>
        <a
          className={clsx(
            "text-black text-shadow",
            "hover:font-serif hover:text-noshadow hover:text-white"
          )}
        >
          Homepage
        </a>
      </Link>
      <ul className="flex">
        <li>
          <Link href={config.paths.artists}>
            <a className="px-4 hover:font-serif">Artists</a>
          </Link>
        </li>
        <li>
          <Link href={config.paths.tracks}>
            <a className="px-4 hover:font-serif">Tracks</a>
          </Link>
        </li>
        <li>
          <Link href={config.paths.contact}>
            <a className="px-4 hover:font-serif">Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
