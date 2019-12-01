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

const GET_BOOK = gql`
    query($id: ID!) {
        book(id: $id) {
            name
            genre
            author {
                name
                age
                books {
                    name
                }
            }
        }
    }
`;

export {
    GET_AUTHORS,
    GET_BOOKS,
    GET_BOOK
}