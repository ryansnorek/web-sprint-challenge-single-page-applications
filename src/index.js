import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';


// Wrap the App component in a Browser Router
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));
