import React from 'react';

const BibleText = ({text}) => {
    let lines = [];

    let verses = text.verses;
    let subtitles = text.titles;

    if (verses !== undefined) {
    verses.map((verse, i) => {
        let title = subtitles.find(({verse}) => verse === "" + (i+1));
        if (title !== undefined) {
        lines.push({type: "subtitle", text: title.text});
        }
        lines.push({type: "verse", text: verse}); 
    });
    }

    let verseNumber = 0;
    let bibleText = (
    (lines.length === 0) ? (
        <p>Loading...</p>
    ) : (
        lines.map((line, i) => {
            switch(line.type) {
            case "subtitle":
                return (<h4 className='mt-4' key={i}>{line.text}</h4>);
            case "verse":
                verseNumber++;
                return (<span key={i}><strong>v{verseNumber}</strong> {line.text} </span>);
            }
        }
        )
    )
    )

    return (<>
      {bibleText}
    </>);
}

export default BibleText;