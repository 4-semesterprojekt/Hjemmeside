import React, { useEffect, useState } from 'react'
import BookDropdown from './components/BookDropdown';
import BibleText from './components/BibleText';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';

import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [backendData, setBackendData] = useState([{}]);

    useEffect(() => {
    fetch("/api").then(
        response => response.json()
    ).then(
        data => {
        setBackendData(data);
        }
    )
  }, []);

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
    <div className="col-6 mx-auto px-2">
      <BookDropdown books={books}/>
      <BibleText text={backendData}/>
    </div>
  )
}

export default App