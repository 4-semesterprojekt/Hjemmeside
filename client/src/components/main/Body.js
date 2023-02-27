import React from 'react'
import './Body.css'

function Body(props) {
    return (
        <div className="col-md-5 col-xs-10 mx-auto py-5">
            <div className='body p-5'>
                {props.children}
            </div>
        </div>
    )
}

export default Body