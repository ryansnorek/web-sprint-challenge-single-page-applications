import React from 'react'
import Header from './Header'

export default function Pizza({ order }) {

    return (
    <>
        <Header/>
        <h1>Congrats {order.name}! Pizza is on it's way!</h1>
        <p></p>
        
    </>
    )
}
