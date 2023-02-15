import React from 'react';

const BookDropdown = (props) => 
(<>
    <select name="books" id="books">
        {props.books.map((book, i) => 
            <option key={i} value={book.abbreviation}>{book.name}</option>
        )}
    </select>
    <select name="chapter" id="chapter">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
</>);

export default BookDropdown;