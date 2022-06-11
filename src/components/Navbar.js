import { React } from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/images/profile.png';

const Navbar = () => {
  const links = [
    { id: 1, path: '/', text: 'BOOKS' },
    { id: 2, path: '/categories', text: 'CATEGORIES' },
  ];

  return (
    <nav className="navBar">
      <div className="title">Bookstore CMS</div>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>
              {' '}
              {link.text}
              {' '}
            </Link>
          </li>
        ))}
      </ul>
      <img src={profile} alt="profile" />
    </nav>
  );
};
export default Navbar;
