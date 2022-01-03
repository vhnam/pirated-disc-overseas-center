import { gql } from "@apollo/client";

export const getTracksQuery = gql`
  query {
    tracks {
      data {
        id
        attributes {
          artist
          slug
          name
          label
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const getTrackQuery = gql`
  query ($slug: String!) {
    tracks(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          artist
          embedLink
          label
          lyrics
          name
          thumbnail {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
