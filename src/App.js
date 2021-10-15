import React, { useState } from "react";
import { Route } from 'react-router-dom';
// Components
import Home from './Components/Home';
import PizzaForm from "./Components/PizzaForm";
import Pizza from "./Components/Pizza";
import Help from './Components/Help';

const App = () => {

  // Initialize form values and order state
  const initialValues = {
    name: '',
    size: '',
    sauce: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    sub: false,
    special: '',
    order: '1'
  }

  const toppingList = [
    'pepperoni', 'sausage', 'canadianbacon', 'spicysausage',
    'chicken', 'onions', 'fruitypebbles', 'tomato', 'garlic',
    'olives', 'artichoke', '3cheese', 'pineapple', 'extracheese'
  ]

  const [order, setOrder] = useState([])
  const [formValues, setFormValues] = useState(initialValues)
  const [toppingsOrdered, setToppingsOrdered] = useState([])

  // Update the form values state when a user makes a change
  const change = (name, value) => {
    
    const toppings = []
    // Loop through the current form values
    for (let item in formValues) {
      // Then loop through the possible toppings to find a match
      toppingList.map(topping => {
        // If it's checked(true) then push it in an array
        if (topping === item && formValues[item] === true) {
          toppings.push(topping)
        }
      }) 
    }
    setToppingsOrdered(toppings)

    setFormValues({ ...formValues, [name]: value})
    console.log(formValues)
  }

  const submit = (e) => {
    e.preventDefault()
    
    const newOrder = {
        name: formValues.name.trim(),
        size: formValues.size,
        sauce: formValues.sauce,
        toppings: toppingsOrdered,
        sub: formValues.sub,
        special: formValues.special.trim(),
        order: formValues.qty
    }
    console.log(newOrder)
    setOrder(newOrder)
    setFormValues(initialValues)
}


  return (
    <>
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/pizza'>
        <PizzaForm 
          formValues={formValues}
          change={change}
          submit={submit}
          />
      </Route>

      <Route path='/ordered'>
        <Pizza/>
      </Route>

      <Route path='/help'>
        <Help/>
      </Route>
    </>
  );
};
export default App;
