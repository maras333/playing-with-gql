import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOK } from '../queries/queries';

export default function BookDetails({ bookId }) {
 
    const { loading, error, data } = useQuery(GET_BOOK, {
        variables: { id: bookId }
    });

    // const { book } = data;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            {
                data ?
                <div>
                    <h3>Book details</h3>
                    <p>{data.book.name}</p>
                    <p>{data.book.genre}</p>
                    <p>{data.book.author.name}</p> 
                </div> :
                ''
            }
        </div>
    );
}

