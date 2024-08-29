import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './navbar.css';
function Navbar() {
  const links = [
    {
      id: 1,
      name: 'Solution',
      to: '/',
    },
    {
      id: 2,
      name: 'Pricing',
      to: '/',
    },
    {
      id: 3,
      name: 'Help Center',
      to: '/',
    },
  ];
  return (
    <div className="navbar">
      <img alt="logo" src={logo} className="logo" />
      <div className="nav">
        <div className="links">
          {links.map(link => {
            return (
              <div key={link.id}>
                <Link to={link.to}>{link.name}</Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
