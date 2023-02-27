import React from 'react'
import './SectionTitle.css'

function SectionTitle(props) {
    return (
        <h4 className='title mt-4 mb-2'>
            {props.children}
        </h4>
    )
}

export default SectionTitle