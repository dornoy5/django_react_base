import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Prods from './Prods';
import Login from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<div>welcome</div>} />
          <Route path="login" element={<Login />}>
            <Route path="prods" element={<Prods />}></Route>
          </Route>
          <Route path="/*" element={<h1>page not found</h1>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
