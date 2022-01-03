import { GetStaticPaths, GetStaticProps } from "next";

import client from "../../apollo-client";
import { getTrackQuery, getTracksQuery } from "../../queries/track";
import { Track } from "../../types/track";

import Navbar from "../../components/Navbar";
import ScrollToTopButton from "../../components/ScrollToTopButton";

interface TrackPageProps {
  data: Track;
}

const TrackPage = ({ data }: TrackPageProps) => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2 gap-4 my-24">
        <div className="text-center">
          <iframe
            className="mx-auto mb-8"
            width="384"
            height="384"
            src={data.attributes.embedLink}
            title={data.attributes.label}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          />
          <h1 className="mb-2 text-2xl">{data.attributes.name}</h1>
          <p className="font-content text-lg">{data.attributes.artist}</p>
        </div>
        <div className="lyrics">
          <p
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{ __html: data.attributes.lyrics }}
          />
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query({
    query: getTracksQuery,
  });
  const tracks: Track[] = data.tracks.data;

  const paths = tracks.map((track: Track) => ({
    params: { slug: track.attributes.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params && params.slug;
  const { data } = await client.query({
    query: getTrackQuery,
    variables: {
      slug,
    },
  });

  return {
    props: {
      data: data.tracks.data[0],
    },
  };
};

export default TrackPage;
