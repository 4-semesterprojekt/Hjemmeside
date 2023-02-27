import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#test"><h2>Den frie bibel</h2></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse mx-4" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active mx-2">
                        <a className="nav-link" href="#test">Læs i bibelen</a>
                    </li>
                    <li className="nav-item active mx-2">
                        <a className="nav-link" href="#test">Om projektet</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;