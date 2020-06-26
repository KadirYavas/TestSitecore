import React, {useState} from 'react';
import Simpson from './components/Simpson';
import Heroes from './components/Heroes';
import ToyStory from './components/ToyStory';
import Ninjago from './components/Ninjago';

function App() {


  return (
    <div>
      <div className="w-25 mx-auto"><h1 className="text-center text-dark bg-info">List of collection</h1></div>
      
      <Simpson />
      <Heroes />
      <ToyStory />
      <Ninjago />
    </div>
  );
}

export default App;

