import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

import { Artist } from "../../types/artist";

import generateAnimatedLabel from "../../utils/generateAnimatedLabel";
import imageUrlBuilder from "../../utils/imageUrlBuilder";

interface InfoProps {
  data: Artist;
  onClick: () => void;
}

const Info = ({ data, onClick }: InfoProps) => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  return (
    <div
      className={clsx(
        "basis-auto grow-0 shrink-0",
        "p-4 w-1/4 h-60",
        "grayscale-60 hover:grayscale-0",
        "cursor-pointer"
      )}
      onClick={onClick}
      onMouseEnter={() => setIsDisplay(true)}
      onMouseLeave={() => setIsDisplay(false)}
    >
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={imageUrlBuilder(data.attributes.profile.data.attributes.url)}
          alt={data.attributes.name}
          layout="fill"
          objectFit="cover"
          priority
        />
        <div
          className={clsx(
            "absolute bottom-0 left-0 right-0",
            "bg-black",
            `${isDisplay ? "block" : "hidden"}`
          )}
        >
          <p
            className={clsx(
              "p-2",
              "whitespace-nowrap indent-negative",
              "animate-marquee"
            )}
            dangerouslySetInnerHTML={{
              __html: generateAnimatedLabel(data.attributes.name),
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Info;
