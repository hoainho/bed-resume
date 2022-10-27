import {React,useState} from "react";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faXmark,faBars } from '@fortawesome/free-solid-svg-icons';


function NavBarRouter(){
    let [open,setOpen] = useState(false);
    return(
       <div>
        <div className='bg-bg_navbar h-1400px'>
          <div onClick={() =>setOpen(!open)} className=' bg-bg_gray w-full h-32 flex justify-center '>
          <FontAwesomeIcon  icon={open ? faXmark:faBars}  className='text-4xl text-gray-400 ml-5 pb-24 translate-y-8 '></FontAwesomeIcon>
          </div>
          <ul>
            <li className="rotate-90 ml-5 mt-20">
              <Link to='/home/banner/' className='text-xl text-slate-50 font-bold mr-5'>HOME</Link>
              <Link to='/contact' className='text-xl text-slate-50 font-bold mr-5'>CONTACT</Link>
            </li>
          </ul>
          
            
          </div>
          
       </div>
    )
}
export default NavBarRouter;