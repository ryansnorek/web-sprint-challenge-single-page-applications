import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function Home() {

    return (
    <>
        <Header/>
        <h2>Your favorite food, delivered while coding</h2>
        <Link id='order-pizza' to='/pizza' className='pizza-button'>Pizza?</Link>
    </>
    )
}
