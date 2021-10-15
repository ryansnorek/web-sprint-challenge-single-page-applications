import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <h1 className='logo'>Lambda Eats</h1>
            <nav>
                <NavLink exact to='/'>Home</NavLink>
                <NavLink to='/help'>Help</NavLink>
            </nav>
        </header>
    )
}
