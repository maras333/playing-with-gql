import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_AUTHORS, GET_BOOKS } from './queries/queries';
import { ADD_BOOK } from './queries/mutations';

function AddBook() {
    const { loading, error, data } = useQuery(GET_AUTHORS);
    const [addBook, result] = useMutation(ADD_BOOK);
    let bookNameInput, genreInput, authorNameInput;

    let submitForm = e => {
        e.preventDefault();
        addBook({ 
            variables: {
                name: bookNameInput.value,
                genre: genreInput.value,
                authorId: authorNameInput.value
            },
            refetchQueries: [{ query: GET_BOOKS }],
            awaitRefetchQueries: true
        });
        bookNameInput.value = '';
        genreInput.value = '';
        authorNameInput.value = '';
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;        
    return (
        <form id="add-book" onSubmit={submitForm}>
            <div className="field">
                <label>Book name:</label>
                <input ref={node => {bookNameInput = node;}} type="text"/>
            </div>
            <div className="field">
                <label>Genre:</label>
                <input ref={node => {genreInput = node;}} type="text"/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select ref={node => {authorNameInput = node;}}>
                    <option>Select author</option>
                    { data.authors.map(({name, id}) => (    
                        <option key={id} value={id}>{name}</option>
                    ))}
                </select>
            </div>  
            <button>Add book</button>                      
        </form>
  );
}

export default AddBook;
