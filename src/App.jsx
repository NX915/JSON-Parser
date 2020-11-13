import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

import { Info } from './components/Info';

function App() {
  const [state, setState] = useState({
    data: {},
  });

  // Use real data from API calls
  const getAllData = () => {
    Promise.all([
      axios.get('/api'),
    ])
      .then(all => {

        return setState(prev => (
          {
            ...prev,
            data: all,
          }))
      })
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <main className='page-content'>
      <h1>Seamless MD JSON Parser</h1>
      <Info
        data={state.data}
      />
    </main>
  );
}

export default App;