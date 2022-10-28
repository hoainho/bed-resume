import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

function NavBarRouter() {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div>
        
          
          {open ? (
           <div className='bg-bg_gray w-full h-32 flex justify-center items-center'>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-4xl text-gray-400 ml-5 "
              onClick={handleMenu}
            ></FontAwesomeIcon>
            </div>
          ) : (
            <div className='bg-bg_gray w-full h-32 flex justify-center items-center'>
            <FontAwesomeIcon
              icon={faBars}
              className="text-4xl text-gray-400 ml-5 "
              onClick={handleMenu}
            ></FontAwesomeIcon>
            </div>
          )}
         
         
        
     
         {open ? (
       
          <div className=' bg-bg_navbar w-full h-1400px pt-24 z-2'>
            <ul>
              <li className="  rotate-90">
                <Link to="/home/banner/" className="text-xl text-slate-50 font-bold mr-5">
                  HOME
                </Link>
                <Link to="/contact" className="text-xl text-slate-50 font-bold mr-5">
                  CONTACT
                </Link>
              </li>
            </ul>
            </div>
           
          ) : (
            <div className=' bg-bg_navbar w-full h-1400px pt-24  z-2'>
            <ul>
              <li >
                <Link to="/home/banner/">
                 <p className=' text-xl text-slate-50 font-bold text-center rotate-90 '>HOME</p> 
                </Link>
              </li>
            </ul>
            </div>
          )}
          
      </div>
      
    </div>
  );
}
export default NavBarRouter;
