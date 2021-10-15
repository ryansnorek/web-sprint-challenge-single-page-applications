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

  const [order, setOrder] = useState([])
  const [formValues, setFormValues] = useState(initialValues)
  // const [toppingsOrder, setToppingsOrder] = useState([])

  // Update the form values state when a user makes a change
  const change = (name, value) => {
    
    // if (name === 'topping') {
    //   formValues.toppings.push(value)
    // }

    setFormValues({ ...formValues, [name]: value})
    console.log(formValues)
  }

  const submit = (e) => {
    e.preventDefault()
    
    const newOrder = {
        name: formValues.name,
        size: formValues.size,
        sauce: formValues.sauce,
        topping1: false,
        topping2: false,
        topping3: false,
        topping4: false,
        sub: false,
        special: '',
        order: formValues.qty
    }
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
