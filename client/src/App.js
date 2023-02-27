// Libraries
import React, { useEffect, useState } from 'react'

// Internal components
import BookDropdown from './components/BookDropdown';
import BibleText from './components/BibleText';

import Header from './components/main/Header';
import Navbar from './components/main/Navbar';
import Body from './components/main/Body'
import Footer from './components/main/Footer';

// Styles
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
  const [currentBook, setCurrentBook] = useState("ruth");
  const [currentChapter, setCurrentChapter] = useState(1);
  const [books, setBooks] = useState([]);
  const [text, setText] = useState("");
  
  useEffect(() => {
    setText("");
    fetch("/api/denfriebibel?book=" + currentBook + "&chapter=" + currentChapter).then(
      response => response.json()
    ).then(
      data => {setText(data)}
    );
  }, [currentBook, currentChapter]);
  
  useEffect(() => {
    fetch("/api/denfriebibel?book=all").then(
      response => response.json()
    ).then(
      data => {
        setBooks(data.books);
      }
    );
  }, []);

  return (
    <div className='primary'>
      <Header>
        <Navbar/>
      </Header>
      <Body>
        <BookDropdown bookChanged={setCurrentBook} chapterChanged={setCurrentChapter} books={books}/>
        <BibleText text={text}/>
      </Body>
      <Footer>
        <p>Den frie bibel</p>
      </Footer>
    </div>
  )
}

export default App