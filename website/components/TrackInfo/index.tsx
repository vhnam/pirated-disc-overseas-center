import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { Track } from "../../types/track";

import generateAnimatedLabel from "../../utils/generateAnimatedLabel";
import imageUrlBuilder from "../../utils/imageUrlBuilder";
import Image from "next/image";

interface TrackProps {
  data: Track;
}

const Track = ({ data }: TrackProps) => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const animatedLabel = generateAnimatedLabel(data.attributes.label);

  return (
    <Link href={`/tracks/${data.attributes.slug}`}>
      <a
        className={clsx(
          "relative",
          'w-full h-screen-1/2',
          "cursor-pointer overflow-hidden",
          " grayscale-60 hover:grayscale-0 transition-filter ease-in"
        )}
        onMouseEnter={() => setIsDisplay(true)}
        onMouseLeave={() => setIsDisplay(false)}
      >
        <Image
          className="w-full h-full"
          src={imageUrlBuilder(data.attributes.thumbnail.data.attributes.url)}
          alt={data.attributes.label}
          layout="fill"
          objectFit="cover"
        />
        <span
          className={clsx(
            "absolute bottom-0 left-0 right-0",
            "bg-black text-2xl text-white",
            `${isDisplay ? "block" : "hidden"}`
          )}
        >
          <p
            className={clsx(
              "p-4",
              "whitespace-nowrap indent-negative",
              "animate-marquee"
            )}
            dangerouslySetInnerHTML={{ __html: animatedLabel }}
          />
        </span>
      </a>
    </Link>
  );
};

export default Track;
