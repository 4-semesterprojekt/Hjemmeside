import React, { useEffect, useState } from 'react';

function BookDropdown(props) {
    const [books, setBooks] = useState([]);
    const [currentBook, setCurrentBook] = useState({});
    const [currentChapter, setCurrentChapter] = useState(1);
    const [chapters, setChapters] = useState(4);

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
        <div className="container px-0 mb-4 mx-0">
            <div className="row">
                <div className='col-8'>
                    <select className="form-select form-select-lg" onChange={(e) => { onBookChange(e.target.value) }} name="books" id="books">
                        {
                            (Array.isArray(books)) ? (books.map((book, i) => 
                                <option key={i} value={i}>{book.name}</option>
                            )) : ""
                        }
                    </select>
                </div>
                <div className='col-4'>
                    <select className="form-select form-select-lg" value={currentChapter} onChange={(e) => { onChapterChange(e.target.value) }} name="chapter" id="chapter">
                        {chapterOptions}
                    </select>
                </div>
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