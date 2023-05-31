import { gql } from '@apollo/client';

export const QUERY_UPLOADS = gql`
query getUpload($uploadId: ID!) {
    upload(uploadId: $uploadId) { 
      _id
      name
      description
      price
      quantity
      image
      genre {
        _id
      }
    }
  }
`;
 
export const QUERY_CHECKOUT = gql`
  query getCheckout($uploads: [ID]!) {
    checkout(uploads: $uploads) {
      session
    }
  }
`;

export const QUERY_ALL_UPLOADS = gql`
  {
    uploads {
      _id
      name
      description
      price
      quantity
      genre {
        name
      }
    }
  }
`;

export const QUERY_GENRE = gql`
  {
    genre {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
      }
     uploads {
          _id
          name
          description
          price
          quantity
          image
        
      }
    }
  }
`;

