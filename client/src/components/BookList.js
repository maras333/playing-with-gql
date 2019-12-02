import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS } from '../queries/queries';
import BookDetails from '../components/BookDetails';


function BookList() {
    const [currentBookId, setCurrentBook] = useState('');
    const { loading, error, data } = useQuery(GET_BOOKS);
    
    async function handleCurrentBookId(id) {
        setCurrentBook(id);
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            <div className="bookList">
                <ul>
    { data.books.map(({ id, name }) => (<li key={id} value={id} onClick={ e => handleCurrentBookId(id)}>{name}</li>))}
                </ul>
            </div>
            <BookDetails currentBookId={currentBookId}/>
        </div>
  );
}

export default BookList;
