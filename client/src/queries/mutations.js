import gql from 'graphql-tag';

const ADD_BOOK = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID! ) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      author {
          name
      }
    }
  }
`;

export {
    ADD_BOOK
}