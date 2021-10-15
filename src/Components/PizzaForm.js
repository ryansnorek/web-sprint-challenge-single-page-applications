import React from 'react'
import Header from './Header'

export default function PizzaForm({ formValues, change, submit, errors }) {
   
    const onChange = (e) => {
        // Pull variables out of event.target object
        const { name, value, checked, type } = e.target
        // If it's a checkbox send the boolean value
        // Otherwise send the input value
        const theValue = type === 'checkbox' ? checked : value
        // Update the form data
        change(name, theValue)
    }

    return (
    <>
        <Header/>
        <div className='pizza-form'>
            <h3>Build Your Own Pizza</h3>
            <img src='../Assets/Pizza.jpg' alt='Pizza Header'/>

            <form onSubmit={submit}>
                <h4>Build You Own Pizza</h4>
                {/* Name */}
                <label>
                    <input  id='name-input' 
                            type='text' 
                            name='name' 
                            value={formValues.name} 
                            onChange={onChange} 
                            placeholder='Please enter name'
                    />
                </label>
                <div className='subheader'>
                    <h4>Choice of Size</h4>
                    <p>Required</p>
                </div>
                <select id='size-dropdown' name='size' onChange={onChange}>
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
                    <label><input value='red' name='sauce' type='radio' onChange={onChange}></input>Original Red</label>
                    <label><input value='ranch' name='sauce' type='radio' onChange={onChange}></input>Garlic Ranch</label>
                    <label><input value='bbq' name='sauce' type='radio' onChange={onChange}></input>BBQ Sauce</label>
                    <label><input value='alfredo' name='sauce' type='radio' onChange={onChange}></input>Spinach Alfredo</label>
                </div>
                <div className='subheader'>
                    <h4>Add Toppings</h4>
                    {/* Add dynamic number */}
                    <p>Choose up to 4</p>
                </div>
                <div className='toppings'>
                    <div className='toppings-left'>
                        <label><input name='pepperoni' type='checkbox' onChange={onChange}/>Pepperoni</label>
                        <label><input name='sausage' type='checkbox' onChange={onChange}/>Sausage</label>
                        <label><input name='canadianbacon' type='checkbox' onChange={onChange}/>Canadian Bacon</label>
                        <label><input name='spicysausage' type='checkbox' onChange={onChange}/>Spicy Italian Sausage</label>
                        <label><input name='chicken' type='checkbox' onChange={onChange}/>Grilled Chicken</label>
                        <label><input name='onions' type='checkbox' onChange={onChange}/>Onions</label>
                        <label><input name='fruitypebbles' type='checkbox' onChange={onChange}/>Fruity Pebbles</label>
                    </div>
                    <div className='toppings-right'>
                        <label><input name='tomato' type='checkbox' onChange={onChange}/>Diced Tomato</label>
                        <label><input name='garlic' type='checkbox' onChange={onChange}/>Roasted Garlic</label>
                        <label><input name='olives' type='checkbox' onChange={onChange}/>Black Olives</label>
                        <label><input name='artichoke' type='checkbox' onChange={onChange}/>Artichoke Hearts</label>
                        <label><input name='3cheese' type='checkbox' onChange={onChange}/>Three Cheese</label>
                        <label><input name='pineapple' type='checkbox' onChange={onChange}/>Pineapple</label>
                        <label><input name='extracheese' type='checkbox' onChange={onChange}/>Extra Cheese</label>
                    </div>
                </div>
                <div className='subheader'>
                    <h4>Choice of Substitue</h4>
                    {/* Add dynamic number */}
                    <p>Choose up to 1</p>
                </div>
                <label>
                    <input 
                        name='sub' 
                        type='checkbox' 
                        onChange={onChange}
                    />Gluten Free Crust (+$1.00)
                    </label>
                <div className='subheader'>
                    <h4>Special Instructions</h4>
                </div>
                <label>
                    <input 
                        value={formValues.special} 
                        name='special' 
                        type='text' 
                        onChange={onChange}
                    />
                </label>
                <div>
                    <select name="qty">
                        <option value='1'>1</option>
                    </select>
                    <button id='order-button'>Add to Order</button>
                </div>
            </form>
        </div>
    </>
    )
}
