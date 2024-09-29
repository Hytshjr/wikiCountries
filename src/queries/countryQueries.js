import { gql } from '@apollo/client/core';

export const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      capital
      currencies
      phone
      languages {
        name
      }
      continent {
        name
      }
      states {
        name
      }
    }
  }
`;