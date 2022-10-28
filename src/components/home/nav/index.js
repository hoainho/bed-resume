import React, { useState } from 'react';
import anhdaidien from '../../../assets/images/anhdaidien.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faInfo, faGlobe } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faInstagram,
  faSquareBehance,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import NarSideBar from './navsidebar/navsidebar';

function Nav() {
  const [sideBarData, setSideBarData] = useState([
    {
      font: faCheck,
      title: 'Bootstrap, Materialize',
    },
    {
      font: faCheck,
      title: 'Stylus, Sass, Less',
    },
    {
      font: faCheck,
      title: 'Gulp, Webpack, Grunt',
    },
    {
      font: faCheck,
      title: 'GIT knowledge',
    },
  ]);

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex-1">
        <div className="bg-bg_gray text-center">
          <img src={anhdaidien} className="w-20 h-20 rounded-full m-auto "></img>
          <p className="text-2xl text-slate-50 my-5">Le Hoai Thuong</p>
          <p className="text-sm pt-2 text-slate-300 py-2">Front-end Developer</p>
        </div>

        <div className="bg-bg_navbar_left pt-3 px-2">
          <div className="grid grid-cols-2 gap-4 ">
            <div className="col-span-1">
              <p className="text-slate-100 text-sm pt-2">Residence:</p>
            </div>
            <div className="col-span-1">
              <p className="text-slate-100 text-sm pt-2  opacity-20">9 District</p>
            </div>
            <div className="col-span-1">
              <p className="text-slate-100 text-sm pt-2">City:</p>
            </div>
            <div className="col-span-1">
              <p className="text-slate-100 text-sm pt-2  opacity-20"> TP HCM</p>
            </div>
            <div className="col-span-1">
              <p className="text-slate-100 text-sm pt-2 pb-3">AGE:</p>
            </div>
            <div className="col-span-1">
              <p className="text-slate-100 text-sm pt-2  opacity-20">22</p>
            </div>
          </div>
          <div className="border-t-2 border-bed_text w-full pt-3 pb-3"></div>
          <div>
            <p className="text-slate-100 text-lg text font-semibold pb-5">English</p>
            <div className="grid grid-cols-3">
              <div className="col-span-1">
                <div className="border-8 border-t-yellow-400 border-r-yellow-400 border-b-yellow-400 rounded-full w-14 h-14 relative ">
                  <p className="absolute  text-slate-100 bottom-2 left-1">60%</p>
                </div>
                <p className="text-slate-100 pl-2 pb-5 text-sm pt-2"> Listen</p>
              </div>
              <div className="col-span-1">
                <div className="border-8 border-t-yellow-400 border-b-yellow-400 border-r-yellow-400 rounded-full w-14 h-14 relative  ">
                  <p className="absolute  text-slate-100 bottom-2 left-1">50%</p>
                </div>
                <p className="text-slate-100 pl-2 text-sm pt-2"> Read</p>
              </div>
              <div className="col-span-1">
                <div className="border-8 border-t-yellow-400 border-b-yellow-400 border-r-yellow-400 rounded-full w-14 h-14 relative ">
                  <p className="absolute  text-slate-100 bottom-2 left-1">50%</p>
                </div>
                <p className="text-slate-100 text-sm pt-2 pl-2"> Writer</p>
              </div>
            </div>
            <div className="border-t-2 border-bed_text w-full pt-3 pb-3"></div>
            <p className="text-slate-100 text-lg text font-semibold">Coding</p>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p className="text-slate-100 font-bold text-sm">HTML</p>
              </div>
              <div className="col-span-1">
                <p className="text-center text-slate-100 font-bold text-sm">90%</p>
              </div>
              <div className="border-t-8 border-black w-52 relative mb-4">
                <div className="border-t-8 border-yellow-400 w-48 absolute bottom-0 "></div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p className="text-slate-100 font-bold text-sm">CSS</p>
              </div>
              <div className="col-span-1">
                <p className="text-center text-slate-100 font-bold text-sm">90%</p>
              </div>
              <div className="border-t-8 border-black w-52 relative mb-4">
                <div className="border-t-8 border-yellow-400 w-48 absolute bottom-0 "></div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p className="text-slate-100 font-bold text-sm">JS</p>
              </div>
              <div className="col-span-1">
                <p className="text-center text-slate-100 font-bold text-sm">75%</p>
              </div>
              <div className="border-t-8 border-black w-52 relative mb-4">
                <div className="border-t-8 border-yellow-400 w-36 absolute bottom-0 "></div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p className="text-slate-100 font-bold text-sm">PHP</p>
              </div>
              <div className="col-span-1">
                <p className="text-center text-slate-100 font-bold text-sm">50%</p>
              </div>

              <div className="border-t-8 border-black w-52 relative mb-4">
                <div className="border-t-8 border-yellow-400 w-24 absolute bottom-0 "></div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <p className="text-slate-100 font-bold text-sm">WordPress</p>
              </div>
              <div className="col-span-1">
                <p className="text-center text-slate-100 font-bold text-sm">85%</p>
              </div>
              <div className="border-t-8 border-black w-52 relative mb-4">
                <div className="border-t-8 border-yellow-400 w-44 absolute bottom-0 "></div>
              </div>
            </div>
          </div>

          <p className="text-slate-100 text-lg text font-semibold leading-loose">Knowledge</p>
          <div>
            {sideBarData.map((item, index) => (
              <NarSideBar key={index} data={item} text={item}></NarSideBar>
            ))}
          </div>
          <div className="border-t-2 border-bed_text w-56 pt-3 pb-3 mt-7"></div>
          <button className="font-bold text-slate-100 text-lg mb-24">DownLoad CV</button>
        </div>
      </div>
      <div className=" bg-color_bg_gray w-auto h-20 flex justify-center items-center">
        <FontAwesomeIcon icon={faTwitter} className="w-6 pr-3"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faInstagram} className="w-6  pr-3"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGlobe} className="w-6  pr-3"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faSquareBehance} className="w-6  pr-3"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGithub} className="w-6  pr-3"></FontAwesomeIcon>
      </div>
    </div>
  );
}
export default Nav;
