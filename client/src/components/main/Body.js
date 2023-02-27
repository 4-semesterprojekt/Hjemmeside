import React from 'react'

function Body(props) {
    return (
        <div className="col-md-4 col-xs-10 mx-auto py-5">
            {props.children}
        </div>
    )
}

export default Body