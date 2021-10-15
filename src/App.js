import React from "react";
import { Route, useParams } from 'react-router-dom';
// Components
import Home from './Components/Home';
import PizzaForm from "./Components/PizzaForm";
import Pizza from "./Components/Pizza";
import Help from './Components/Help';

const App = () => {

  const { url } = useParams()

  return (
    <>
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/pizzaform'>
        <PizzaForm/>
      </Route>

      <Route path='/pizza'>
        <Pizza/>
      </Route>

      <Route path='/help'>
        <Help/>
      </Route>
    </>
  );
};
export default App;
