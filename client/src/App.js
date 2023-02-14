import React, { useEffect, useState } from 'react'

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

  let title = (
    <h1>{backendData.book}</h1>
  )

  let lines = [];

  let verses = backendData.verses;
  let titles = backendData.titles;

  if (verses !== undefined) {
    verses.map((verse, i) => {
      let title = titles.find(({verse}) => 
      {
        return verse === "" + (i+1);
      })
      if (title !== undefined) {
        lines.push({type: "subtitle", text: title.text});
      }
      lines.push({type: "verse", text: ("v" + (i+1) + " " + verse)}); 
    });
  }

  let text = (
    (lines === 'undefined') ? (
      <p>Loading...</p>
    ) : (
      lines.map((line, i) => {
          switch(line.type) {
            case "subtitle":
              return (<h2>{line.text}</h2>);
            case "verse":
              return (<span>{line.text}</span>);
          }
        }
      )
    )
  )

  return (
    <div>
      {title}
      {text}
    </div>
  )
}

export default App