
import logo from "../assets/ecommerce-logo.png";
import sideBar from "../assets/menu-icon.png";

const NavBar = ({ onSidebarToggle }) => {
  return (
    <div className='nav-bar'>
      <img src={sideBar} onClick={onSidebarToggle}  className="sideBar" alt="Sidebar Logo"/>
      <img src={logo} alt="logo"/>
      <h2> Mandy's E-commerece App</h2>
    </div>
  )
}

export default NavBar;



