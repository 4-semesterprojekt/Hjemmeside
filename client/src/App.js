import React, { useEffect, useState } from 'react'
import BookDropdown from './components/BookDropdown';
import BibleText from './components/BibleText';

function App() {
  let books = [
    {
      name: "Ruths bog",
      abbreviation: "Ruth",
      chapters: 4
    },
    {
      name: "Jobs bog",
      abbreviation: "Job",
      chapters: 42
    }
  ];

  return (
    <div>
      <BookDropdown books={books}/>
      <BibleText/>
    </div>
  )
}

export default App