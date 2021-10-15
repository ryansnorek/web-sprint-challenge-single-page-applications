import React from 'react'
import { Link, Route } from 'react-router-dom'

export default function Home() {
    return (
        <>
        {/* Design MVP elements: header, nav(home,help), pizza? button */}
        {/* Use Link and Route for navigation */}
        <header>
            <h1>Lambda Eats</h1>
            <nav>
                <Link exact to='/'>Home</Link>
                <Link to='/help'>Help</Link>
            </nav>
        </header>
        <body>
            <h2>Your favorite food, delivered while coding</h2>
            <button>Pizza?</button>
        </body>
        </>
    )
}
