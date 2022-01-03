import clsx from "clsx";
import Image from "next/image";

import { Artist } from "../../types/artist";

import imageUrlBuilder from "../../utils/imageUrlBuilder";

import Modal, { ModalProps } from "../Modal";

interface ArtistModalProps extends ModalProps {
  data: Artist;
}

const ArtistModal = ({ data, onClose, ...props }: ArtistModalProps) => {
  return (
    <Modal {...props} onClose={onClose}>
      <div
        className={clsx(
          "relative w-40 h-40 mx-auto mb-8",
          "border-4 border-black rounded-full"
        )}
      >
        <Image
          className="rounded-full scale-95 origin-center"
          src={imageUrlBuilder(data.attributes.profile.data.attributes.url)}
          alt={data.attributes.name}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <p className="font-serif text-2xl text-black text-center">
        {data.attributes.name}
      </p>
      <p className="mb-8 px-16 text-xl text-gray-500 text-center">
        {data.attributes.stageName}
      </p>
      <button
        className={clsx(
          "inline-flex justify-center",
          "w-full px-4 py-2",
          "text-base font-medium text-white",
          "rounded-md border border-transparent shadow-sm bg-black",
          "hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
        )}
        type="button"
        onClick={onClose}
      >
        Close
      </button>
    </Modal>
  );
};

export default ArtistModal;
