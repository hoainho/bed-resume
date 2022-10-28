/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classname'

function NavBarRouter() {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen(!open);
  };
  const location = useLocation();
  
  const [navbars, setNavbars] = useState([
    {
      path: '/',
      name: 'HOME',
      active: false,
    },
    {
      path: '/contact',
      name: 'CONTACT',
      active: false,
    },
  ]);
  useEffect(() => {
    const activeNavbar = navbars.map((item) => {
      if (item.path === location?.pathname) return { ...item, active: true };
      return { ...item, active: false };
    });
    console.log(activeNavbar);
    setNavbars(activeNavbar);
  }, [location?.pathname, open]);

  return (
    <div className={classnames(`bg-bg_navbar collapse-menu`,{'collapse-menu--active': open})}>
      {open ? (
        <div className="bg-bg_gray w-full h-32 flex justify-center items-center">
          <FontAwesomeIcon
            icon={faXmark}
            className="text-4xl text-gray-400 ml-5 "
            onClick={handleMenu}
          ></FontAwesomeIcon>
        </div>
      ) : (
        <div className="bg-bg_gray w-full h-32 flex justify-center items-center">
          <FontAwesomeIcon
            icon={faBars}
            className="text-4xl text-gray-400 ml-5 "
            onClick={handleMenu}
          ></FontAwesomeIcon>
        </div>
      )}

      <div className={`w-full z-2 ${open ? 'pt-10' : 'pt-24'}`}>
        <ul className={`${!open ? "rotate-90" : "flex flex-col justify-center px-5"}`}>
          {navbars.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className={`text-xl text-slate-50 font-bold mr-5 ${
                !open && !item.active && 'hidden'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default NavBarRouter;
