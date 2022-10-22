import React from "react";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SliderBanner=({data}) =>{

   
      return(
        <div >
            <div className="bg-bg_gray_blue  pt-5 pr-8 pb-4 pl-10 m-9 mt-16">
            <img
              src={data.image}
              className="w-32 h-32 border rounded-full  object-cover float-right translate-x-[-17px] translate-y-[-77px] "
            ></img>
            <p className="text-2xl text-slate-100 font-bold">{data.author}</p>
            <span className="text-gray-400 font-bold italic">{data.title}</span>
            <p className="text-xl font-bold text-gray-50 leading-7 pt-10">
              {data.text}
            </p>
            <div className="text-yellow-400 w-36 h-11 bg-bg_gray_black flex justify-center items-center rounded-3xl mt-3">
              <FontAwesomeIcon icon={data.font}></FontAwesomeIcon>
              <FontAwesomeIcon icon={data.font}></FontAwesomeIcon>
              <FontAwesomeIcon icon={data.font}></FontAwesomeIcon>
              <FontAwesomeIcon icon={data.font}></FontAwesomeIcon>
              <FontAwesomeIcon icon={data.font}></FontAwesomeIcon>
            </div>
          </div>     
        </div>
      )
}
export default SliderBanner;