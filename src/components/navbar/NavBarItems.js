import {
  faHouse,
  faCartArrowDown,
  faCameraRetro,
  faCamera,
} from '@fortawesome/free-solid-svg-icons';

const menu = [
  { title: 'Home', icon: faHouse, href: '/home' },
  { title: 'Movies', icon: faCameraRetro, href: '/movies' },
  { title: 'Add Movie', icon: faCamera, href: '/movies/create' },
  { title: 'My Reservation', icon: faCartArrowDown, href: '/my-reservation' },
];

export default menu;
