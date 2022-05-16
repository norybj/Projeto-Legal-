import React from 'react';
import ReactDOM from 'react-dom/client';

import { Routes, Route, BrowserRouter, Router} from 'react-router-dom'

import './index.css';

import dobro from './dobro';
import menu from './menu'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element= {<menu />} />
        <Route path="/dobro' element= {<dobro/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

