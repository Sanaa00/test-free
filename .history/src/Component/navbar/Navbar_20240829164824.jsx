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
      id: 1,
      name:"Help Center"
    },
  ]
  return (
    <div className="navbar">
            <img alt="logo" src={logo} className="logo" />
            <div>
                
            </div>
    </div>
  )
}

export default Navbar
