import React from 'react';
import './App.css';
import { EventHome } from './Components/pages/EventHome/EventHome';
import { Switch, Route } from "react-router-dom";
import { CreateEvent } from './Components/pages/EventHome/CreateEvent/CreateEvent';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={EventHome}></Route>
        <Route exact path='/createEvent' component={CreateEvent}></Route>
      </Switch>
    </div>
  );
}

export default App;
