import React from 'react';
import axios from 'axios';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/views/Main';
import Detail from './components/Detail';
import Update from './components/Update';


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>

      <Routes>
        <Route element={<Main />} path='/people/' />
        <Route element={<Detail />}  path='/people/:id' />
        <Route element={<Update />}  path='/people/edit/:id' />

      </Routes>
      
      
      </BrowserRouter>

      

      
        
      
      
    </div>
  )
}

export default App;
