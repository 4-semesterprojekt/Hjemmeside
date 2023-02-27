import React from 'react'
import './Verse.css'

function Verse(props) {
    return (
        <span className='verseLine'>
            <strong id={props.verseNumber} className='verseNumber'>v{props.verseNumber}</strong>
            &nbsp;{props.children}
        </span>
    )
}

export default Verse