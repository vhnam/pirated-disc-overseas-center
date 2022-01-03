export interface Artist {
  __typename: string;
  id: string;
  attributes: {
    __typename: string;
    name: string;
    stageName: string;
    profile: {
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
