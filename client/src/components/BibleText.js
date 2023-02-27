import React from 'react';

import Loading from './main/Loading';
import Error from './main/Error';
import Verse from './Verse';

function BibleText (props) {
    let lines = [];

    let verses;
    let subtitles;
    let errors;

    if (props.text !== undefined) {
        verses = props.text.verses;
        subtitles = props.text.titles;
        errors = props.text.errors;
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

    if (errors !== undefined) {
        for (let i = 0; i < errors.length; i++) {
            let error = errors[i];
            lines.push({type: "error", text: error}); 
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
                    case "error":
                        return (<Error key={i}>{line.text}</Error>);
                    case "verse":
                        verseNumber++;
                        return (<Verse key={i} verseNumber={verseNumber}>{line.text}</Verse>);
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