
import logo from "../assets/ecommerce-logo.png";
import image from "../assets/cart-logo.png";

const NavBar = (props) => {
  return (
    <>    
    <div className='nav-bar'>
   
      <img src={logo} className="site-logo" alt="site-logo" />
      <input type="search" className="search-bar" 
      placeholder="Search products, guides and more"></input>

      <h2 className="header-title">E-commerce App</h2>

       <button className="button-logout" onClick="clicked">LogIn</button>
      <button className="button-login" onClick="clicked">LogOut</button> 
       
      <img src={image} className="cart-logo" alt="logo"/>     
    </div>
    </>
  )
}

export default NavBar;



