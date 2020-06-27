import React from 'react';
import Simpson from './components/Simpson';
import Heroes from './components/Heroes';
import ToyStory from './components/ToyStory';
import Ninjago from './components/Ninjago';

function App() {

  return (
    <div>
      <div className="w-25 mx-auto">
        <h1 className="text-center text-dark bg-info">List of collection</h1>
      </div>
          <Simpson />
          <hr className="w-75 bg-warning mt-4"/>
          <Heroes />
          <hr className="w-75 bg-warning mt-4"/>
          <ToyStory />
          <hr className="w-75 bg-warning mt-4"/>
          <Ninjago />
    </div>
  );
}

export default App;

