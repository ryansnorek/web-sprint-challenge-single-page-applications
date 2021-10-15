import React from 'react'
import Header from './Header'

export default function Help() {
    return (
    <>
        <Header/>
        <h1>Help page</h1>
        <a 
            className='help' 
            href='https://duckduckgo.com/' 
            target='_blank'
            rel='noreferrer'
        >
        Click here for help
        </a>
    </>
    )
}
