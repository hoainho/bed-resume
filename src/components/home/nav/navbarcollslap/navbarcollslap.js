import {React,useState} from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmark,faBars } from '@fortawesome/free-solid-svg-icons';


function NavBarCollslap(){
    const [open,setOpen] = useState(false);
    const handleMenu = () =>{
        setOpen(!open);
    }

    return(
       <div>
        <div className='bg-bg_navbar w-72 h-1400px'>
          <div className=' bg-bg_gray w-full  flex justify-center items-center '>
            {open ? (
                <FontAwesomeIcon icon={faXmark} className='text-4xl text-gray-400 ml-5 pb-24 translate-y-8' onClick={handleMenu}></FontAwesomeIcon>
            ):(
                <FontAwesomeIcon  icon={faBars}  className='text-4xl text-gray-400 ml-5 pb-24 translate-y-8'  onClick={handleMenu}></FontAwesomeIcon>
            )}
          
          </div> 
          <ul>
            <li className=" translate-x-16 translate-y-12">
              <Link to='/home/banner/' className='text-xl text-slate-50 font-bold mr-5'>HOME</Link>
              <Link to='/contact' className='text-xl text-slate-50 font-bold mr-5'>CONTACT</Link>
            </li>
          </ul>
          
            
          </div>
          
       </div>
    )
}
export default NavBarCollslap;