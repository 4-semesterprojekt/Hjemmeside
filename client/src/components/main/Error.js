import React from 'react'
import './Error.css'

function Error(props) {
    return (
        <div className='error my-4'>
            {props.children}
        </div>
    )
}

export default Error