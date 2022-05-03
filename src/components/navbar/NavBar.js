import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleLeft, faHouse, faCartArrowDown, faCamera, faFilm, faBookmark, faRoute,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/navbar/NavBar.scss';

const NavBar = () => {
  const [open, setOpen] = useState(true);

  const menu = [
    { title: 'Home', icon: faHouse, href: '#home' },
    { title: 'My Reservation', icon: faCartArrowDown, href: '#my-reservation' },
    { title: 'Latest Movies', icon: faClock, href: '#latest-movies' },
    { title: 'Upcoming Movies', icon: faFilm, href: '#upcoming-movies' },
    { title: 'Book Movies', icon: faBookmark, href: '#book-movies' },
    { title: 'Watch Live', icon: faRoute, href: '#watch-live' },
  ];
  return (

    <div>
      <header className="flex fixed">
        <nav className={`${open ? 'w-72' : 'w-20'} 
        h-screen p-5 pt-8 bg-dark-purple duration-300 relative`}
        >
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            className={`bg-[#fff] rounded-full -right-3 border-dark-purple 
            absolute cursor-pointer top-9 w-7 border-2 ${!open && 'rotate-[180]'}`}
            onClick={() => setOpen(!open)}
          />
          <div className="flex gap-x-4 items-center">
            <FontAwesomeIcon
              icon={faCamera}
              className={`bg-[#fff] p-2 cursor-pointer duration-500
              ${open && 'rotate-[360deg]'}`}
            />
            <h1 className={`text-white origin-left font-medium text-xl duration-300
            ${!open && 'scale-0'}`}
            >
              Movies
            </h1>
          </div>
          <ul className="p-7 font-semibold flex-1 h-screen">
            {menu.map((menu) => (
              <li
                key={uuidv4()}
                className="text-gray-300 text-sm flex items-center
                gap-x-4 p-2 hover:bg-light-white rounded-md"
              >
                <FontAwesomeIcon icon={menu.icon} alt="Icon" />
                <a href={menu.href} className={`${!open && 'hidden'} origin-left duration-300 text-[16px] `}>
                  {menu.title}
                </a>

              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default NavBar;
