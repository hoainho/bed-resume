import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contact from './components/contact';
import Nav from './components/home/nav';
import HomePage from './pages/homePage';
import NavBarRouter from './components/home/nav/navbarrouter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="grid grid-cols-11 font-poppins bg-bg_navbar">
        <div className="col-span-2 min-h-full">
          <Nav />
        </div>
        <div className="col-span-8">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
        <div className="col-span-1">
          <NavBarRouter />
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
