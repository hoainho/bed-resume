import * as React from 'react';
import Nav from './components/home/nav';
import NavBarRouter from './components/home/nav/navbarrouter';
import HomePage from './pages/homePage';


function App() {

 
  return (
    <div className="grid grid-cols-11  font-poppins ">
      <div className="col-span-2 min-h-full bg-bg_navbar">
        <Nav />
      </div>
      <div className="col-span-8">
       <HomePage />
      </div>

      <div className="col-span-1 min-h-full">
        <NavBarRouter />
      </div>
    </div>
  );
}

export default App;
