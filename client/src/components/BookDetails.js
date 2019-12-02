import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_BOOK } from '../queries/queries';

export default function BookDetails({ currentBookId }) {
 
    const { loading, error, data } = useQuery(GET_BOOK, {
        variables: { id: currentBookId }
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (
        <div>
            {
                data.book ?
                <div>
                    <h3>Book details</h3>
                    <p>{data.book.name}</p>
                    <p>{data.book.genre}</p>
                    <p>{data.book.author.name}</p>
                    <ul>
                        {
                            data.book.author.books.map((book) => {
                                return <li>{book.name}</li>
                            })
                        }
                    </ul>
                </div> :
                ''
            }
        </div>
    );
}

