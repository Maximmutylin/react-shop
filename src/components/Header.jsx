import React from 'react'

const Header = () => {
    return (
        <nav className='header'>
            <div className="nav-wrapper teal darken-1 ">
                <i className="brand-logo right"></i>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a target="_blank" href="https://github.com/Maximmutylin">My github</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header