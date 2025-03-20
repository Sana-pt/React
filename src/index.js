import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Demo from './Demo'; 
import Demos from './Demo2';
import Task from './fulltask';
import Component1 from './component1';
import ProductCard from './shoe';
import Multi from './multi-page-app';
import Homepage from './homepage';
import Aboutpage from './Aboutpage';
import Contactpage from './Contactpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Parent from './parent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/P' element={<ProductCard></ProductCard>}></Route>
      <Route path='/Demo2' element={<Demos></Demos>}></Route>
      <Route path='/full' element={<Task></Task>}></Route>
      <Route path='/mp' element={<Multi></Multi>}></Route>
      <Route path='/hp' element={<Homepage></Homepage>}></Route>
      <Route path='/ap' element={<Aboutpage></Aboutpage>}></Route>
      <Route path='/cp' element={<Contactpage></Contactpage>}></Route>
      <Route path='/parent' element={<Parent></Parent>}></Route>




     

    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
