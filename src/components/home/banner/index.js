import { React, useState } from 'react';
import NavBarRouter from '../nav/navbarrouter';
import Nav from '../nav';
import PricePlan from '../content/priceplan';
import MyService from'../content/myservice';
import anhnen1 from '../../../assets/images/anhnen1.jpg';
import imgslider from '../../../assets/images/imgslider.png';
import imgslider2 from '../../../assets/images/imgslider2.png';
import imgavatar from '../../../assets/images/imgavatar-removebg.png';
import brand from '../../../assets/images/brand.png';
import studio from '../../../assets/images/studio.png';
import vintage from '../../../assets/images/viintage.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderBanner from './bannersliderbar/bannersliderbar'; 
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Footer from '../../footer';

function Banner() {

  const [sliderBannerData, setsliderBannerData] = useState([
    {
      image: imgslider,
      author: 'Paul Trueman',
      title: 'Template author',
      text: 'Working with Arthur has been a pleasure. Better yet - I alerted them of a minor issue before going to sleep. The iss ure was fixed the next morning. I could nt ask for better support. Thanks you Arthur! This is easily a 5 star freelancer.',
      font: faStar,
    },
    {
      image: imgslider2,
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
    arrows: false
  };


  return (
    <div className="grid grid-cols-11  font-poppins">
      <div className="col-span-2">
        <Nav></Nav>
      </div>
      <div className="col-span-8  ">
        <div className=" h-450px bg-bg-img-banner flex items-end bg-cover bg-center">
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
                <img src={imgavatar} className="h-auto "></img>
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
          <h1 className="font-bold text-3xl text-slate-100 leading-loose pl-10px ">Recommendations</h1>

          <Slider {...settings}>
            {sliderBannerData.map((item, index) => (
              <SliderBanner key={index} data={item} text={item}>
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

          <Footer></Footer>
        </div>
      </div>

      <div className="col-span-1">
        <NavBarRouter></NavBarRouter>

      </div>
    </div>
  );
}
export default Banner;

