import React from 'react';
import Snowfall from './components/bg';
import SnowText from './components/font';
import Tree from './components/tree';
function App() {
  return (
    <div>
      <Snowfall />
      <SnowText text="Merry Christmas" />
      <Tree />
    </div>
  );
}

export default App;
