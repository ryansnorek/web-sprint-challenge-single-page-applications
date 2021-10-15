import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function Home() {
    return (
    <>
        <Header/>
        <body>
            <h2>Your favorite food, delivered while coding</h2>
            <Link className='pizza' to='/pizzaform'>Pizza?</Link>
        </body>
    </>
    )
}
