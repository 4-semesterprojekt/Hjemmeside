import React from 'react'
import './Footer.css'

function Footer(props) {
    return (
        <div className='col-md-5 col-xs-10 mx-auto'>
            <div className='footer p-5'>
                {props.children}
            </div>
        </div>
    )
}

export default Footer