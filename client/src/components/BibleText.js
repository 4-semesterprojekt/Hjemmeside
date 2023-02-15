import React, { useEffect, useState }  from 'react';

function BibleText() {
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
                return (<h2 key={i}>{line.text}</h2>);
            case "verse":
                return (<span key={i}>{line.text}</span>);
            }
        }
        )
    )
    )

    return (<>
      {title}
      {text}
    </>);
}

export default BibleText;