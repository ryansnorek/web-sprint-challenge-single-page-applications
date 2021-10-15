import React from 'react'
import Header from './Header'

export default function PizzaForm() {
    return (
    <>
        <Header/>
        <body className='pizza-form'>
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
                    <label><input value='red' name='sauce' type='radio'></input>Original Red</label>
                    <label><input value='ranch' name='sauce' type='radio'></input>Garlic Ranch</label>
                    <label><input value='bbq' name='sauce' type='radio'></input>BBQ Sauce</label>
                    <label><input value='alfredo' name='sauce' type='radio'></input>Spinach Alfredo</label>
                </div>
                <div className='subheader'>
                    <h4>Add Toppings</h4>
                    <p>Choose up to 10</p>
                </div>
                <div className='toppings'>
                    <div className='toppings-left'>
                        <label><input checked='' name='pepperoni' type='checkbox'></input>Pepperoni</label>
                        <label><input checked='' name='sausage' type='checkbox'></input>Sausage</label>
                        <label><input checked='' name='canadianbacon' type='checkbox'></input>Canadian Bacon</label>
                        <label><input checked='' name='spicysausage' type='checkbox'></input>Spicy Italian Sausage</label>
                        <label><input checked='' name='chicken' type='checkbox'></input>Grilled Chicken</label>
                        <label><input checked='' name='onions' type='checkbox'></input>Onions</label>
                        <label><input checked='' name='fruity' type='checkbox'></input>Fruity Pebbles</label>
                    </div>
                    <div className='toppings-right'>
                        <label><input checked='' name='tomato' type='checkbox'></input>Diced Tomato</label>
                        <label><input checked='' name='garlic' type='checkbox'></input>Roasted Garlic</label>
                        <label><input checked='' name='olives' type='checkbox'></input>Black Olives</label>
                        <label><input checked='' name='artichoke' type='checkbox'></input>Artichoke Hearts</label>
                        <label><input checked='' name='threecheese' type='checkbox'></input>Three Cheese</label>
                        <label><input checked='' name='pineapple' type='checkbox'></input>Pineapple</label>
                        <label><input checked='' name='extracheese' type='checkbox'></input>Extra Cheese</label>
                    </div>
                </div>
            </form>
        </body>
    </>
    )
}
