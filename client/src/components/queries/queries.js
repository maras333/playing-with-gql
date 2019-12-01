import { gql } from 'apollo-boost';

const GET_AUTHORS = gql`
    {
        authors {
            id
            name
        }
    }
`;

const GET_BOOKS = gql`
    {
        books {
            id
            name
        }
    }
`;

export {
    GET_AUTHORS,
    GET_BOOKS
}