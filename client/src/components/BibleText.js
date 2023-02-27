import React from 'react';

import Loading from './main/Loading';

function BibleText (props) {
    let lines = [];

    let verses;
    let subtitles;

    if (props.text !== undefined) {
        verses = props.text.verses;
        subtitles = props.text.titles;
    }

    if (verses !== undefined) {
        for (let i = 0; i < verses.length; i++) {
            let verse = verses[i];
            let title = subtitles.find(({verse}) => verse === "" + (i+1));

            if (title !== undefined) {
                lines.push({type: "subtitle", text: title.text});
            }

            lines.push({type: "verse", text: verse}); 
        }
    }

    //https://stackoverflow.com/questions/6582233/hash-in-anchor-tags
    let verseNumber = 0;
    let bibleText = (
        (lines.length !== 0) ? (
            lines.map((line, i) => {
                switch(line.type) {
                    case "subtitle":
                        return (<h4 className='mt-4' key={i}>{line.text}</h4>);
                    case "verse":
                        verseNumber++;
                        return (<span key={i}><strong id={verseNumber}>v{verseNumber}</strong> {line.text} </span>);
                    default:
                        return (<p>{line.text}</p>)
                }
            }
        )
        ) : ""
    )
    
    if (bibleText === "")
    {
        return (
            <div className='d-flex justify-content-center'>
                <Loading/>
            </div>
        )
    }
    else
    {
        return (
            <div>
                {bibleText}
            </div>
        );
    }
}

export default BibleText;