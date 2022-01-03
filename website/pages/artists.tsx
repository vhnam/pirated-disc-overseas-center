import { useAtom } from "jotai";

import { showModalAtom } from "../store/modal";

import client from "../apollo-client";
import { getArtistsQuery } from "../queries/artist";
import { Artist } from "../types/artist";

import Navbar from "../components/Navbar";
import Info from "../components/Info";
import ArtistModal from "../components/ArtistModal";

interface ArtistsPageProps {
  artists: Artist[];
}

const ArtistsPage = ({ artists }: ArtistsPageProps) => {
  const [, showModal] = useAtom(showModalAtom);

  const onShow = (artist: Artist) => {
    showModal({
      component: ArtistModal,
      props: {
        data: artist,
      },
    });
  };

  return (
    <>
      <Navbar />
      <div className="my-16">
        <h1 className="text-9xl text-center mb-16">Artists</h1>
        <div className="w-9/12 mx-auto">
          <div className="flex flex-wrap justify-center -mx-8">
            {artists.map((artist: Artist) => (
              <Info
                key={artist.id}
                data={artist}
                onClick={() => onShow(artist)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: getArtistsQuery,
  });

  return {
    props: {
      artists: data.artists.data,
    },
  };
};

export default ArtistsPage;
