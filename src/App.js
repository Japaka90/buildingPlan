import React from 'react';
import './App.css';
import StackPlan from './components/stackPlan';
import Flex from './ui-components/Flex';

function App() {
  return (
    <div className="App">
      <Flex justify="center">
        <StackPlan />
      </Flex>
    </div>
  );
}

export default App;
