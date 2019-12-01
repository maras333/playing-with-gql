import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS } from '../queries/queries';
import BookDetails from '../components/BookDetails';


function BookList() {
    const { loading, error, data } = useQuery(GET_BOOKS);
 
    let bookId;
    const getBookDetails = (id) => {
        bookId = id;
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log(bookId)
    return (
        <di>
            <div className="bookList">
                <ul>
                    { data.books.map(({ id, name }) => (<li key={id} onClick={getBookDetails(id)}>{name}</li>))}
                </ul>
            </div>
            <BookDetails bookId={bookId}/>
        </di>
  );
}

export default BookList;
