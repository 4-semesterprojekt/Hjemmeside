import React from 'react';

import Loading from './main/Loading';
import Error from './main/Error';
import Verse from './Verse';
import SectionTitle from './SectionTitle';

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
    let sectionNumber = -1;
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    let bibleText = (
        (lines.length !== 0) ? (
            lines.map((line, i) => {
                switch(line.type) {
                    case "subtitle":
                        sectionNumber++;
                        return (<SectionTitle key={i} id={alphabet[sectionNumber]}>{line.text}</SectionTitle>);
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