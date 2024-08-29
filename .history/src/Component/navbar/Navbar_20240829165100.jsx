import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./navbar.css"
function Navbar() {
  const links = [
    {
      id: 1,
      name:"Solution"
    },
     {
      id: 2,
      name:"Pricing"
    }, {
      id: 3,
      name:"Help Center"
    },
  ]
  return (
    <div className="navbar">
            <img alt="logo" src={logo} className="logo" />
            <div>
        <div>{links.map((link) => {
          <div>
            <Link key={link.id} to="/">{link.name}</Link>
          </div>
        })}
        </div>
            </div>
    </div>
  )
}

export default Navbar
