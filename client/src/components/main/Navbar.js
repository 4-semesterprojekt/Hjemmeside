import React from 'react'

const Navbar = () => {
    return (
        <div>
            <a className="navbar-brand" href="#test"><h2>Den frie bibel</h2></a>
            <div className='row p-2 pt-4'>
                <a className="col-3 nav-link" href="#test">Læs i bibelen</a>
                <a className="col-3 nav-link" href="#test">Artikler</a>
                <a className="col-3 nav-link" href="#test">Om os</a>
                <a className="col-3 nav-link" href="#test">Kontakt</a>
            </div>
        </div>
    )
}

export default Navbar;