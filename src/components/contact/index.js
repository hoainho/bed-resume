import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faAt,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import NavBarRouter from "../home/nav/navbarrouter";
import Nav from "../home/nav";
import Footer from "../footer";


function Contact(){
    return(
        <div>
          <div className="grid grid-cols-11 grid-flow-col font-poppins bg-bg_body">
            <div className="col-span-2">
              <Nav></Nav>
            </div>
            <div className="col-span-8">
            <div className="bg-bg-img-banner h-auto bg-center bg-cover">
          <h4 className='text-slate-50 text-4xl font-bold ml-1 pt-4'>Contact Information</h4>
          <div className="grid grid-cols-3 pt-11 pl-1">
            <div className="col-span-1 bg-bg_gray_blue  w-80 h-52 ">
              <div className=" flex justify-around leading-60px">
                <p className="text-slate-100 font-bold">Country:</p>
                <p className="text-color_gray">Canada</p>
              </div>
              <div className=" flex justify-around leading-60px">
                <p className="text-slate-100 font-bold">City:</p>
                <p className="text-color_gray">Toronto</p>
              </div>
              <div className=" flex justify-around leading-60px">
                <p className="text-slate-100 font-bold">Street:</p>
                <p className="text-color_gray">20 Dell bank Rd</p>
              </div>
            </div>
            <div className="col-span-1 bg-bg_gray_blue  w-80 h-52">
              <div className=" flex leading-60px justify-center">
                <p className="text-slate-100 font-bold">Email:</p>
                <p className="text-color_gray">Thuong123tvt@gmail.com</p>
              </div>
              <div className=" flex justify-around leading-60px">
                <p className="text-slate-100 font-bold">Telegram:</p>
                <p className="text-color_gray">@After</p>
              </div>
              <div className=" flex justify-around leading-60px">
                <p className="text-slate-100 font-bold">Skype:</p>
                <p className="text-color_gray">After</p>
              </div>
            </div>
            <div className="col-span-1 bg-bg_gray_blue  w-80 h-52 pt-3">
              <div className="leading-10 pl-3">
                <p className="text-slate-100 font-bold">Support : &#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230; </p>
              </div>
              <div className="leading-10 pl-3 ">
                <p className="text-slate-100 font-bold">Service : &#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230; </p>
              </div>
              <div className=" leading-10 pl-3">
                <p className="text-slate-100 font-bold">Office : &#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230; </p>
              </div>
              <div className=" leading-10 pl-3">
                <p className="text-slate-100 font-bold">Personal : &#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230;&#8230; </p>
              </div>
            </div>
          </div>
          <h4 className='text-slate-50 text-2xl font-bold ml-7 pt-4'>Get in touch</h4>
        </div>
        <div className='pt-6 pl-3 pr-3'>

        <form className='bg-bg_gray h-450px pt-5 '>
          <label className='flex justify-center items-center mb-3'>
          <div  className='bg-bg_body text-bg_color_form w-20 h-20'>
            <FontAwesomeIcon icon={faUser} className=' text-4xl translate-x-5 translate-y-5'></FontAwesomeIcon>
           </div>
             <input type="text" name="name" className='w-5/6 h-20 bg-bg_color_form'  />
          </label>
          <label className='flex justify-center items-center mb-3'>
          <div  className='bg-bg_body text-bg_color_form w-20 h-20'>
            <FontAwesomeIcon icon={faAt} className=' text-4xl translate-x-5 translate-y-5' ></FontAwesomeIcon>
            </div>
             <input type="text" name="email" className='w-5/6 h-20 bg-bg_color_form'  />
          </label>
          <label className='flex justify-center items-center mb-3'>
            <div  className='bg-bg_body text-bg_color_form w-20 h-36'>
            <FontAwesomeIcon icon={faEnvelope} className=' text-4xl translate-x-5 translate-y-5'></FontAwesomeIcon>
            </div>
             <input type="text" name="text" className='w-5/6 bg-bg_color_form h-36'   />
          </label>
            <input type="submit" value="Send Messenger" className='bg-yellow-400 w-72 h-16 text-2xl font-bold text-center translate-x-16 translate-y-2' />
          </form>
        <Footer></Footer>
        </div>
            </div>
            <div className="col-span-2">
              <NavBarRouter></NavBarRouter>
            </div>
            
      
        </div>
      </div>
    )
}
export default Contact;