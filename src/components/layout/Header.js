import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    backgroundColor: '#333',
    color: '#FFF',
    textAlign: 'center',
    padding: '.75em'
}

const linkStyle = {
    color: '#FFF',
    textDecoration: 'none'
}

export default Header;