import { React } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const links = [
    { id: 1, path: '/', text: 'BOOKS' },
    { id: 2, path: '/categories', text: 'CATEGORIES' },
  ];

  return (
    <nav className="navBar">
      <div>Bookstore CMS</div>
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
    </nav>
  );
};
export default Navbar;
