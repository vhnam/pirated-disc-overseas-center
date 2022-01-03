import { gql } from "@apollo/client";

export const getArtistsQuery = gql`
  query {
    artists {
      data {
        id
        attributes {
          name
          stageName
          profile {
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
