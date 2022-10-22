import {React,useState} from 'react';
import Nav from '../nav';
import PricePlan from '../content/priceplan';
import MyService from '../content/myservice';
import imgbanner from '../../../assets/images/imgbanner.jpg';
import anhnen1 from '../../../assets/images/anhnen1.jpg';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderBanner from './bannersliderbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faStar } from '@fortawesome/free-solid-svg-icons';


function Banner() {
  
  const[sliderBannerData,setsliderBannerData] = useState([

    {
        image:anhnen1,
        author:'Paul Trueman',
        title:'Template author',
        text:'Working with Arthur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The iss ure was fixed the next morning. I could nt ask for better support. Thanks you Arthur! This is easily a 5 star freelancer.',
        font:faStar

    },
    {
      image:anhnen1,
      author:'Paul Trueman',
      title:'Template author',
      text:'Working with Arthur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The iss ure was fixed the next morning. I could nt ask for better support. Thanks you Arthur! This is easily a 5 star freelancer.',
      font:faStar
    },
    {
      image:anhnen1,
      author:'Paul Trueman',
      title:'Template author',
      text:'Working with Arthur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The iss ure was fixed the next morning. I could nt ask for better support. Thanks you Arthur! This is easily a 5 star freelancer.',
      font:faStar
    }
  ])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
    
  
  
  return (
    <div class="grid grid-cols-10 grid-flow-col font-poppins">
      <div class="col-span-2">
        <Nav></Nav>
      </div>
      <div class="col-span-7  ">
        <img src={imgbanner} className="w-full h-450px object-cover  "></img>
        <div className="bg-bg_body w-11/12 h-365px m-11 border border-bed_text   ">
          <div className="grid grid-cols-4">
            <div className="col-span-3 p-7">
              <p className="text-slate-50 text-5xl font-bold">Discovery my Amazing</p>
              <p className="text-slate-50 text-5xl font-bold pb-5">Art Space!</p>
              <p className="text-slate-50  pb-6">I build automation tools.</p>
              <button className="bg-yellow-400 border border-yellow-500 w-48 h-12 text-xs">
                EXPLORE NOW
              </button>
            </div>
            <div className="col-span-1">
              <img src={anhnen1} className="h-auto"></img>
            </div>
          </div>
        </div>
        <div className=" bg-bg_body h-auto">
          <div className="grid grid-cols-4 gap-9 px-7 py-12">
            <div className="col-span-1">
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <p className="text-yellow-400 font-bold text-base">10+</p>
                </div>
                <div className="col-span-1">
                  <p className="font-bold text-xl text-slate-50">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <p className="text-yellow-400 font-bold text-base">143</p>
                </div>
                <div className="col-span-1">
                  <p className="font-bold text-xl text-slate-50">Completed Project</p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <p className="text-yellow-400 font-bold text-base">114</p>
                </div>
                <div className="col-span-1">
                  <p className="font-bold text-xl text-slate-50">Happy Customer</p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <p className="text-yellow-400 font-bold text-base">20+</p>
                </div>
                <div className="col-span-1">
                  <p className="font-bold text-xl text-slate-50">Honors and Awards</p>
                </div>
              </div>
            </div>
          </div>
          <MyService></MyService>
          <PricePlan></PricePlan>
          <h1 className="font-bold text-3xl text-slate-100 leading-loose  ">Recommendations</h1>


          <Slider {...settings}>              
            {sliderBannerData.map((item,index)=>(<SliderBanner key={index} data={item} text={item}> author={item} title{item}</SliderBanner>))}        
          </Slider>
        </div>
      </div>

      <div class="col-span-1">asdasd</div>
    </div>
  );
}
export default Banner;
