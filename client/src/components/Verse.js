import React from 'react'
import './Verse.css'

function Verse(props) {
    if (props.footnotes.length === 0) {
        return (
            <span className='verseLine'>
                <strong id={props.verseNumber} className='verseNumber ignore'>v{props.verseNumber}</strong>
                &nbsp;{props.text}
            </span>
        )
    }
    else 
    {
        let text = [];
        let words = props.text.split(' ');

        for (let i = 0; i < words.length; i++) {
            text.push((i !== 0 ? " " : "") + words[i]);
            for (let j = 0; j < props.footnotes.length; j++) {
                if (props.footnotes[j].word === i + 1)
                    text.push(<sup key={i} className='ignore'>[<a href="#/">{props.footnotes[j].designation}</a>]</sup>);
            }
        }
        
        return (
            <span className='verseLine'>
                <strong id={props.verseNumber} className='verseNumber ignore'>v{props.verseNumber}</strong>
                &nbsp;{text}
            </span>
        )
    }
}

export default Verse