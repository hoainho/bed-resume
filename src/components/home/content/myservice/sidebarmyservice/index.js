import React from "react";

const SideBarMyService =({data})=>{
    return(
        <div>
            <div className="col-span-1 border-0 bg-bg_gray_blue w-72 h-80 p-9">
          <h4 className="text-2xl text-slate-100 font-bold">{data.title}</h4>
          <p className=" text-base size w-56  tracking-wide text-gray-400 leading-8">
            {data.Text}
          </p>
          <button className="text-yellow-500 font-bold text-sm">{data.button} &#8594;</button>
          </div>
        </div>
        
    )
}
export default SideBarMyService;