import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './navbar.css';
function Navbar() {
  const links = [
    {
      id: 1,
      name: 'Solution',
      to: '/solution',
    },
    {
      id: 2,
      name: 'Pricing',
      to: '/pricing',
    },
    {
      id: 3,
      name: 'Help Center',
      to: '/help',
    },
  ];
  const buutons = [
    {
      id: 1,
      name: 'Signin',
      to: '/signIn',
    },
    {
      id: 1,
      name: 'Get Started',
      to: '/get',
    },
  ];
  return (
    <div className="navbar">
      <img alt="logo" src={logo} className="logo" />
      <div className="nav">
        <div className="links">
          {links.map(link => {
            return (
              <div key={link.id} className="link-con">
                <Link className="pages" to={link.to}>
                  {link.name}
                </Link>
              </div>
            );
          })}
        </div>
        <button className="btn">Signin</button>
        {/* <div className="btn-con">
          {buutons.map(btn => {
            return (
              <button className="btn" key={btn.id}>
                {btn.name}
              </button>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
