import React, { useEffect, useState } from 'react';

import './BookDropdown.css'

function BookDropdown(props) {
    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState({});
    const [currentChapter, setCurrentChapter] = useState(1);
    const [chapters, setChapters] = useState(0);

    useEffect(()=>{
        setBooks(props.books);
    }, [props.books]);

    useEffect(()=>{
        if (books !== undefined && books.length > 0)
        {
            setCurrentBook( books[0] );
        }
        else
        {
            setCurrentBook({ chapters: 0 });
        }
    }, [books]);

    useEffect(()=>{
        setChapters(currentBook.chapters);
    }, [currentBook]);

    const chapterOptions = [];
    for (let i = 1; i <= chapters; i++) {
        chapterOptions.push((<option key={i} value={i}>Kapitel {i}</option>));
    }

    function onBookChange(bookIndex) {
        onChapterChange(1);
        setCurrentBook(books[bookIndex]);
        props.bookChanged(books[bookIndex].abbreviation);
    }

    function onChapterChange(chapter) {
        props.chapterChanged(chapter);
        setCurrentChapter(chapter);
    }

    return (
        // Sticky top: https://stackoverflow.com/questions/28340054/bootstrap-keep-div-fixed-after-scrolling-to-it
        <div className='sticky-top'>
            <div className="container px-0 mx-0">
                <div className='arrow-container'>
                    <div className='d-flex justify-content-between'>
                        <a className='arrow arrow-left ignore' href='#/' onClick={() => { onChapterChange(currentChapter > 1 ? (currentChapter - 1) : 1) }}>←</a>
                        <a className='arrow arrow-right ignore' href='#/' onClick={() => { onChapterChange(currentChapter < currentBook.chapters ? (currentChapter + 1) : currentBook.chapters) }}>→</a>
                    </div>
                </div>
                <div className="row">
                    <div className='col-8'>
                        <select className="form-select form-select-lg ignore" onChange={(e) => { onBookChange(e.target.value) }} name="books" id="books">
                            {
                                (Array.isArray(books)) ? (books.map((book, i) => 
                                    <option key={i} value={i}>{book.name}</option>
                                )) : ""
                            }
                        </select>
                    </div>
                    <div className='col-4'>
                        <select className="form-select form-select-lg ignore" value={currentChapter} onChange={(e) => { onChapterChange(e.target.value) }} name="chapter" id="chapter">
                            {chapterOptions}
                        </select>
                    </div>
                </div>
                <div className='transparent-transition'/>
            </div>
        </div>
    )
}

/*class BookDropdown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            books: props.books
        }

        this.booksChanged = this.booksChanged.bind(this);
        this.chapterChanged = this.chapterChanged.bind(this);
    }

    booksChanged(e) {
        this.props.bookChanged(e.target.value);
    }

    chapterChanged(e) {
        this.props.chapterChanged(e.target.value);
    }

    render() {
        return (<div className="container px-0 mb-4 mx-0">
            <div className="row">
                <div className='col-8'>
                    <select className="form-select form-select-lg" onChange={this.booksChanged} name="books" id="books">
                        {
                            (this.state.books !== undefined) ? (this.state.books.map((book, i) => 
                                <option key={i} value={book.abbreviation}>{book.name}</option>
                            )) : ""
                        }
                    </select>
                </div>
                <div className='col-4'>
                    <select className="form-select form-select-lg" onChange={this.chapterChanged} name="chapter" id="chapter">
                        {
                            (this.state.books !== undefined) ? (this.state.books.map((book, i) => 
                                <option key={i} value={book.abbreviation}>{book.name}</option>
                            )) : ""
                        }
                    </select>
                </div>
            </div>
        </div>);
    }
}*/

export default BookDropdown;