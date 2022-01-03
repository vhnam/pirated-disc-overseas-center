export interface Track {
  __typename: string;
  id: string;
  attributes: {
    __typename: string;
    artist: string;
    embedLink: string;
    slug: string;
    name: string;
    label: string;
    lyrics: string;
    thumbnail: {
      __typename: string;
      data: {
        __typename: string;
        attributes: {
          __typename: string;
          url: string;
        };
      };
    };
  };
}
