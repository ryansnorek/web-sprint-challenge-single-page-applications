import React from 'react'
import Header from './Header'

export default function Pizza({ order }) {

    return (
    <>
        <Header/>
        <h1>Congrats {order.name}! Pizza is on it's way!</h1><br/>
        <p>1 {order.size} {order.toppings} pizza with {order.sauce} sauce.</p>
        
    </>
    )
}
