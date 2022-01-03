import client from "../apollo-client";
import { getTracksQuery } from "../queries/track";
import { Track } from "../types/track";

import Navbar from "../components/Navbar";
import TrackInfo from "../components/TrackInfo";

interface TracksPageProps {
  tracks: Track[];
}

const TracksPage = ({ tracks }: TracksPageProps) => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 mt-16">
        {tracks.map((track) => (
          <TrackInfo key={track.id} data={track} />
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: getTracksQuery,
  });

  return {
    props: {
      tracks: data.tracks.data,
    },
  };
};

export default TracksPage;
