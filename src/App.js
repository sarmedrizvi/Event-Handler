import React from 'react';

import './App.css';
import { Header } from './Components/Header/Header-Component';
import { Footer } from './Components/Footer/Footer';
import { Body } from './Components/Body/Body';
import { EventHome } from './Components/Event/EventHome/EventHome';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <EventHome/>
      <Footer />
    </div>
  );
}

export default App;
