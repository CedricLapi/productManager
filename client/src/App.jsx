import React from 'react';
import axios from 'axios';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/views/Main';









function App() {
  

  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route element={<Main />} path='/' default />

      </Routes>
      
      
      </BrowserRouter>

      

      
        
      
      
    </div>
  )
}

export default App;
