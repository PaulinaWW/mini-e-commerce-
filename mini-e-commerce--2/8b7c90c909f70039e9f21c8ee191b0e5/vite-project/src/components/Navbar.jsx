
import logo from "../assets/ecommerce-logo.png";
import image from "../assets/cart-logo.png";

const NavBar = (props) => {
  return (
    <>    
    <div className='nav-bar'>
      <img src={logo} className="logo" alt="logo"/>
      <input type="search" className="searchbar" 
      placeholder="Search products, guides and more"></input>
       <button className="button-logout" onClick="clicked">LogIn</button>
      <button className="button-login" onClick="clicked">LogOut</button> 
      <img src={image} className="cartlogo" alt="logo"/>    
    </div>
    
    <h2 className="headertitle"> Mandy's E-commerce App</h2>
    
   
   
    </>
  )
}

export default NavBar;



