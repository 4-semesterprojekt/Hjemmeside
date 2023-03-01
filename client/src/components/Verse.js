import React from 'react'
import './Verse.css'

import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

function Verse(props) {
    if (props.footnotes.length === 0) {
        return (
            <span className='verseLine'>
                <strong id={props.verseNumber} className='verseNumber ignore'>{props.verseNumber}</strong>
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
                {
                    let tooltipID = props.verseNumber + "f" + props.footnotes[j].designation;
                    let footnote = (
                        <span>
                            <Tooltip id={tooltipID}/>
                            <sup key={i} className='ignore'>
                                [<a href="#/" data-tooltip-id={tooltipID} data-tooltip-content={props.footnotes[j].text}>{props.footnotes[j].designation}</a>]
                            </sup>
                        </span>
                    );
                    text.push(footnote);
                }
            }
        }
        
        return (
            <span className='verseLine'>
                <strong id={props.verseNumber} className='verseNumber ignore'>{props.verseNumber}</strong>
                &nbsp;{text}
            </span>
        )
    }
}

export default Verse