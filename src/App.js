import React from "react";
import Homepage from "./components/Homepage";
import {ContextController} from './ContextApi';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Favorite from './components/favourite'
import "./App.css";

function App() {
  return (
    <>
    <Router>
     <ContextController>
     <Route exact path="/">
      <Homepage />
      </Route>
      <Route exact path="/favourite">
        <Favorite/>
      </Route>
      </ContextController>
      </Router>

      </>
  
  );
}

export default App;
