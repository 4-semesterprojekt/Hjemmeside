import React from 'react';

// https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down
const BookDropdown = ({books}) => 
(<div className="container px-0 my-4">
    <div className="row">
        <div className='col-8'>
            <select className="form-select form-select-lg" name="books" id="books">
                {books.map((book, i) => 
                    <option key={i} value={book.abbreviation}>{book.name}</option>
                )}
            </select>
        </div>
        <div className='col-4'>
            <select className="form-select form-select-lg" name="chapter" id="chapter">
                <option value="1">Kapitel 1</option>
                <option value="2">Kapitel 2</option>
                <option value="3">Kapitel 3</option>
                <option value="4">Kapitel 4</option>
            </select>
        </div>
    </div>
</div>);

export default BookDropdown;