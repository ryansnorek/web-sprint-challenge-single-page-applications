import React from 'react'
import Header from './Header'

export default function PizzaForm() {
    return (
    <>
        <Header/>
        <body>
            <h3>Build Your Own Pizza</h3>
            <img src='../Assets/Pizza.jpg' alt='Pizza Header'/>
            <form>
                <h4>Build You Own Pizza</h4>
                <div className='subheader'>
                    <h4>Choice of Size</h4>
                    <p>Required</p>
                </div>
                <select name='size'>
                    <option value=''>Select</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                    <option value='massive'>MASSIVE</option>
                </select>
                <div className='subheader'>
                    <h4>Choice of Sauce</h4>
                    <p>Required</p>
                </div>
                <div className='sauce'>
                    <label><input name='red' type='radio'></input>Original Red</label>
                    <label><input name='ranch' type='radio'></input>Garlic Ranch</label>
                    <label><input name='bbq' type='radio'></input>BBQ Sauce</label>
                    <label><input name='alfredo' type='radio'></input>Spinach Alfredo</label>
                </div>
                
            </form>
        </body>
    </>
    )
}
