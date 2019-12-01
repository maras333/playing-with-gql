import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOKS } from './queries/queries';


function BookList() {
    const { loading, error, data } = useQuery(GET_BOOKS);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
            
    return (
        <div className="bookList">
            <ul>
                { data.books.map(({ id, name }) => (<li key={id}>{name}</li>))}
            </ul>
        </div>
  );
}

export default BookList;
