import React from "react";


function MyService(){
    return(
        <div>
            <h1 className="font-bold text-3xl text-slate-100 leading-loose">My Services</h1>
          <div className="grid grid-cols-3 gap-24">
            <div className="col-span-1 border-0 bg-bg_gray_blue w-72 h-80 p-9">
              <h4 className="text-2xl text-slate-100 font-bold">Game Design</h4>
              <p className=" text-base size w-56  tracking-wide text-gray-400 leading-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi
                deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.
              </p>
              <button className="text-yellow-500 font-bold text-sm">Order Now &#8594;</button>
            </div>
            <div className="col-span-1 border-0  bg-bg_gray_blue w-72 h-80 p-9 ">
              <h4 className="text-2xl text-slate-100 font-bold">Advertising</h4>
              <p className="text-base size leading-8 w-56  tracking-wide text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi
                deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.
              </p>
              <button className="text-yellow-500 font-bold text-sm">Order Now &#8594;</button>
            </div>
            <div className="col-span-1 border-0  bg-bg_gray_blue w-72 h-80 p-9">
              <h4 className="text-2xl text-slate-100 font-bold">Photography</h4>
              <p className="text-base size leading-8 w-56  tracking-wide text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi
                deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.
              </p>
              <button className="text-yellow-500 font-bold text-sm">Order Now &#8594;</button>
            </div>
          </div>
        </div>
    )
}
export default MyService;