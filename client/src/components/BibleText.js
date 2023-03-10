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
    let footnotes;
    
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    if (props.text !== undefined) {
        verses = props.text.verses;
        subtitles = props.text.titles;
        errors = props.text.errors;
        footnotes = props.text.footnotes === undefined ? [] : props.text.footnotes;

        if (footnotes !== undefined) {
            for (let i = 0; i < footnotes.length; i++) {
                footnotes[i].designation = alphabet[i];
            }
        }
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
                        return (<SectionTitle key={i}>{line.text}</SectionTitle>);
                    case "error":
                        return (<Error key={i}>{line.text}</Error>);
                    case "verse":
                        verseNumber++;
                        
                        let footnotesInVerse = [];
                        for (let j = 0; j < footnotes.length; j++) {
                            if (footnotes[j].verse === verseNumber)
                                footnotesInVerse.push(footnotes[j]);
                        }

                        return (<Verse key={i} verseNumber={verseNumber} footnotes={footnotesInVerse} text={line.text}/>);
                    default:
                        return (<p>{line.text}</p>)
                }
            }
        )
        ) : ""
    )
    
    return (
        <div className='py-0'>
            {bibleText === "" ? (
                <div className='d-flex justify-content-center'>
                    <Loading/>
                </div>
            ) : (
                <div>
                    {bibleText}
                </div>
            )}
        </div>
        
    )
}

export default BibleText;