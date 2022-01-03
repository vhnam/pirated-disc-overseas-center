import type { NextPage } from "next";
import Link from "next/link";

import config from "../utils/config";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-between p-8 min-h-screen">
      <h1 className="text-[10rem] leading-none text-shadow text-black tracking-widest">
        Pirated Disc
        <br /> Overseas
        <br /> Center
      </h1>
      <div className="flex items-center justify-between">
        <ul>
          <Link href={config.paths.artists}>
            <a className="px-4 text-2xl tracking-wide hover:font-serif">
              Artists
            </a>
          </Link>
          <Link href={config.paths.tracks}>
            <a className="px-4 text-2xl tracking-wide hover:font-serif">
              Tracks
            </a>
          </Link>
          <Link href={config.paths.contact}>
            <a className="px-4 text-2xl tracking-wide hover:font-serif">
              Contact
            </a>
          </Link>
        </ul>
        <img
          className="rounded-full border-2 border-white"
          width={100}
          height={100}
          src="logo.jpg"
          alt="Logo"
        />
      </div>
    </div>
  );
};

export default Home;
