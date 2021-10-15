import React, { useState, useEffect } from "react";
import { Route, useHistory } from 'react-router-dom';
import * as yup from 'yup'
import schema from './validation'
import axios from 'axios'
 // ****************** Components ******************
import Home from './Components/Home';
import PizzaForm from "./Components/PizzaForm";
import Pizza from "./Components/Pizza";
import Help from './Components/Help';

 // ****************** Initial variables ******************
const initialValues = {
  name: '',
  size: '',
  sauce: false,
  toppings: '',
  sub: false,
  special: '',
}
const toppingList = [
  'pepperoni', 'sausage', 'canadianbacon', 'spicysausage',
  'chicken', 'onions', 'fruitypebbles', 'tomato', 'garlic',
  'olives', 'artichoke', '3cheese', 'pineapple', 'extracheese'
]

const App = () => {

   // ****************** State ******************
  const [order, setOrder] = useState([])
  const [toppingsOrdered, setToppingsOrdered] = useState([])
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState('')
  const [disabled, setDisabled] = useState(true)



  // ****************** Validation ******************
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors(''))
      .catch(err => setFormErrors(err.errors))
  }
  
  useEffect(() => {
    // If the form values are validated then enable the submit button
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


 // ****************** Toppings ******************
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


 // ****************** Form Changes ******************
  const change = (name, value) => {
    // Validate that the name input is over 2 characters
    if (name === 'name') validate(name, value)
    setFormValues({ ...formValues, [name]: value})
  }

 // ****************** Submit ******************
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
    }
    // Post the order and log the results
    axios.post('https://reqres.in/api/orders', newOrder)
      .then(res => {
        setOrder(res.data)
        // returns a database record of 
        // name, size, toppings and special instructions
      })
      .catch(err => console.log(`Error: ${err}`))
    console.log(newOrder)
    // Reset form input fields
    setFormValues(initialValues)
  }

   // ****************** Stretch Redirect ******************
    // Redirect to the final ordered page 
    const history = useHistory()
    const redirect = () => {
      let path = '/ordered'
      history.push(path)
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

          // Cant get this to work without cancelling form
          // redirect={redirect}
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
