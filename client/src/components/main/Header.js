import React from 'react'
import './Header.css'

function Header(props) {
    return (
        <div className='header col-md-5 col-xs-10 mx-auto p-4'>
            {props.children}
        </div>
    )
}

export default Header