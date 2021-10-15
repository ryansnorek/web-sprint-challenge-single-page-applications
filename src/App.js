import React, { useState, useEffect } from "react";
import { Route } from 'react-router-dom';
import * as yup from 'yup'
import schema from './validation'
import axios from 'axios'
// Components
import Home from './Components/Home';
import PizzaForm from "./Components/PizzaForm";
import Pizza from "./Components/Pizza";
import Help from './Components/Help';

// Initialize form values
const initialValues = {
  name: '',
  size: '',
  sauce: false,
  toppings: '',
  sub: false,
  special: '',
  order: '1'
}
const toppingList = [
  'pepperoni', 'sausage', 'canadianbacon', 'spicysausage',
  'chicken', 'onions', 'fruitypebbles', 'tomato', 'garlic',
  'olives', 'artichoke', '3cheese', 'pineapple', 'extracheese'
]

const App = () => {

  const [order, setOrder] = useState([])
  const [toppingsOrdered, setToppingsOrdered] = useState([])
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState('')
  const [disabled, setDisabled] = useState(true)

  // Validate the name input
  const validate = (name, value) => {

    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors(''))
      .catch(err => setFormErrors(err.errors[0]))
  }
  
  useEffect(() => {
    // If the form values are validated then enable the submit button
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  useEffect(() => {
    // Get all the checked toppings 
    const toppings = []
    // Loop through the current form values
    for (let item in formValues) {
      // Then loop through the possible toppings to find a match
      toppingList.forEach(topping => {
        // If it's checked(true) then push it in an array
        if (topping === item && formValues[item] === true) {
          toppings.push(topping)
        }
      }) 
    }
    setToppingsOrdered(toppings)
  },[formValues])

  const change = (name, value) => {
    // Validate that the name input is over 2 characters
    if (name === 'name') validate(name, value)
    setFormValues({ ...formValues, [name]: value})
  }

  const submit = (e) => {
    // Prevent browser refresh
    e.preventDefault()

    // Create a new object for the submitted order
    const newOrder = {
        name: formValues.name.trim(),
        size: formValues.size,
        sauce: formValues.sauce,
        toppings: toppingsOrdered,
        sub: formValues.sub,
        special: formValues.special.trim(),
        order: formValues.qty
    }

    // Post the order and log the results
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        // console.log(res)
        setOrder(res.data)
      })
    
    console.log(newOrder)
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
          errors={formErrors}
          disabled={disabled}
        />
      </Route>

      <Route path='/ordered'>
        <Pizza order={order}/>
      </Route>

      <Route path='/help'>
        <Help/>
      </Route>
    </>
  );
};
export default App;
