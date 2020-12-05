import React from 'react';
import {Layout} from './layout/Layout';
import './App.css';
import * as stores from './stores';
import { Provider } from 'mobx-react';
import Temperature from './components/Temperature';
import Countdown from './components/CountdownComp.js';
import Card from './components/CardComp.js';

function App() {
  return (
    <Provider {...stores}>
      <Layout>
          <Countdown/>
          <Card/>
          <Temperature/>
      </Layout>
    </Provider>
    
  );
}

export default App;
