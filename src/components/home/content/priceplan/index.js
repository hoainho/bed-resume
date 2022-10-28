import {React,useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

function PricePlan(){
    return(
    <div>
             <h1 className="font-bold text-3xl text-slate-100 leading-loose">Price Plans</h1>
          <div className="grid grid-cols-3 gap-24">
            <div className="col-span-1 border-0 bg-bg_gray_blue w-72 h-80 p-9">
              <h4 className="text-2xl text-slate-100 font-bold text-center">Starter Price</h4>
              <h1 className=" text-xl size w-56  tracking-wide text-slate-100 leading-8 text-center">
                $ <span className="text-yellow-500 text-3xl font-bold leading-8">FREE</span> hour
              </h1>
              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">Ui Design</p>
              </div>
              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">Web Development</p>
              </div>

              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faXmark} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">SEO optimization</p>
              </div>

              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faXmark} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">Logo Design </p>
              </div>

              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faXmark} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">WordPress integration</p>
              </div>

              <button className="text-yellow-500 font-bold text-xl translate-x-16 leading-6">
                Order Now &#8594;
              </button>
              <p className="text-xs text-gray-400 font-bold">
                * Free only when ordering paid services
              </p>
            </div>

            <div className="col-span-1 border-0 bg-bg_gray_blue w-72 h-80 p-9 relative overflow-hidden">
              <p className="text-black  text-sm text-center bg-yellow-400 w-28 h-9 flex items-center justify-center rotate-45 top-5 left-52 absolute">
                POPULAR
              </p>
              <h4 className="text-2xl text-slate-100 font-bold text-center">Hourly Payment</h4>
              <h1 className=" text-xl size w-56  tracking-wide text-slate-100 leading-8 text-center">
                $ <span className="text-yellow-500 text-3xl font-bold leading-8">29</span> hour
              </h1>
              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">Ui Design</p>
              </div>
              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">Web Development</p>
              </div>

              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faXmark} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">SEO optimization</p>
              </div>

              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faXmark} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">Logo Design </p>
              </div>

              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faXmark} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">WordPress integration</p>
              </div>

              <button className="text-yellow-500 font-bold text-xl translate-x-16 leading-6">
                Order Now &#8594;
              </button>
            </div>
            <div className="col-span-1 border-0 bg-bg_gray_blue w-72 h-80 p-9">
              <h4 className="text-2xl text-slate-100 font-bold text-center">Full time</h4>
              <h1 className=" text-xl size w-56  tracking-wide text-slate-100 leading-8 text-center">
                $ <span className="text-yellow-500 text-3xl font-bold leading-8">2999</span> hour
              </h1>
              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">Ui Design</p>
              </div>
              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faCheck} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">Web Development</p>
              </div>

              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faXmark} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">SEO optimization</p>
              </div>

              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faXmark} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">Logo Design </p>
              </div>

              <div className="flex justify-center leading-loose items-baseline gap-2">
                <FontAwesomeIcon icon={faXmark} className="text-yellow-500"></FontAwesomeIcon>
                <p className="text-gray-400 font-bold">WordPress integration</p>
              </div>

              <button className="text-yellow-500 font-bold text-xl translate-x-16 leading-6">
                Order Now &#8594;
              </button>
            </div>
          </div>

    </div>
    )
        
}
export default PricePlan;