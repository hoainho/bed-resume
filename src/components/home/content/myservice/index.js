import React, { useState } from 'react';
import SideBarMyService from './sidebarmyservice';

function MyService() {
  const [sideBarMyservice, setsideBarMyservice] = useState([
    {
      title: 'Game Design',
      Text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
      button: 'Order Now',
    },
    {
      title: 'Advertising',
      Text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
      button: 'Order Now',
    },
    {
      title: 'Photography',
      Text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.',
      button: 'Order Now',
    },
  ]);
  return (
    <div>
      <h1 className="font-bold text-3xl text-slate-100 leading-loose">My Services</h1>
      <div className="grid grid-cols-3 gap-24">
       {sideBarMyservice.map((item,index)=>(<SideBarMyService key={index} data={item} title={item}  Text={item} button={item} ></SideBarMyService>))}
      </div>
    </div>
  );
}
export default MyService;
