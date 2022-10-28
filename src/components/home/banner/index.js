import { React, useState } from 'react';
import Nav from '../nav';
import PricePlan from '../content/priceplan';
import MyService from '../content/myservice';
import imgbanner from '../../../assets/images/imgbanner.jpg';
import anhnen1 from '../../../assets/images/anhnen1.jpg';
import brand from '../../../assets/images/brand.png';
import studio from '../../../assets/images/studio.png';
import vintage from '../../../assets/images/viintage.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderBanner from './bannersliderbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark, faStar,faUser,faAt,faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Banner() {

  const [sliderBannerData, setsliderBannerData] = useState([
    {
      image: anhnen1,
      author: 'Paul Trueman',
      title: 'Template author',
      text: 'Working with Arthur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The iss ure was fixed the next morning. I could nt ask for better support. Thanks you Arthur! This is easily a 5 star freelancer.',
      font: faStar,
    },
    {
      image: anhnen1,
      author: 'Paul Trueman',
      title: 'Template author',
      text: 'Working with Arthur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The iss ure was fixed the next morning. I could nt ask for better support. Thanks you Arthur! This is easily a 5 star freelancer.',
      font: faStar,
    },
    {
      image: anhnen1,
      author: 'Paul Trueman',
      title: 'Template author',
      text: 'Working with Arthur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The iss ure was fixed the next morning. I could nt ask for better support. Thanks you Arthur! This is easily a 5 star freelancer.',
      font: faStar,
    },
  ]);

  const [imgBrandContent] = useState([vintage, brand, studio, brand]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows:false
  };

  return (
    <div class="grid grid-cols-11 grid-flow-col font-poppins">
      <div class="col-span-2">
        <Nav></Nav>
      </div>
      <div class="col-span-8  ">
        <div className=" h-450px bg-bg-img-banner flex items-end bg-cover bg-center">
          {/* <img src={imgbanner} className="w-full h-full object-cover -z-20 absolute top-0 left-0"></img> */}
          <div className="relative ">
            <div className="grid grid-cols-4 ">
              <div className="col-span-3 px-7 z-2">
                <p className="text-slate-50 text-5xl font-bold">Discovery my Amazing</p>
                <p className="text-slate-50 text-5xl font-bold pb-5">Art Space!</p>
                <p className="text-slate-50  pb-6">I build automation tools.</p>
                <button className="bg-yellow-400 border border-yellow-500 w-48 h-12 text-xs">
                  EXPLORE NOW
                </button>
              </div>
              <div className="col-span-1 z-2">
                <img src={anhnen1} className="h-auto "></img>
              </div>
            </div>
            <div className="bg-slate-400 w-full z-1 opacity-50 h-full border-0 border-bed_text absolute top-0 left-0  "></div>
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
            {sliderBannerData.map((item, index) => (
              <SliderBanner key={index} data={item} text={item}>
                {' '}
                author={item} title{item}
              </SliderBanner>
            ))}
          </Slider>

          <div className="flex justify-center items-center">
            {imgBrandContent.map((img, index) => {
              return (
                <div key={index}>
                  <img src={img}></img>
                </div>
              );
            })}
          </div>

          <div>
            <div className="bg-bg-img-banner h-auto bg-center bg-cover">
              <h4 className='text-slate-50 text-4xl font-bold ml-24 pt-4'>Contact Information</h4>
              <div className="grid grid-cols-3 pt-3 pt-11 pl-24">
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
            <div className='pt-6'>

            <form className='bg-bg_gray h-450px pt-5 padding'>
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
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-2">
        <div className='bg-bg_navbar h-full'>
          <FontAwesomeIcon icon ={faXmark} className='text-4xl text-gray-400 ml-5 pb-24'></FontAwesomeIcon>
          <h3 className='text-xl text-slate-50 font-bold ml-5'>Home</h3>
          <h3 className='text-gray-400 font-bold text-xl ml-5'>Contact</h3>
          </div>
        
      </div>
    </div>
  );
}
export default Banner;
