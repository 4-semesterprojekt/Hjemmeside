import React from 'react'

function Footer(props) {
    return (
        <div className='navbar-light bg-light py-3'>
            <div className='col-md-6 col-xs-10 mx-auto'>
                {props.children}
            </div>
        </div>
    )
}

export default Footer