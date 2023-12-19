import React, { useContext, useState } from "react";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png'
import './Navbar.css'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar =()=>{
  const [menu,setMenu] = useState('shop');
  const {getTotalCartItems} = useContext(ShopContext);

    return (
      <div className="nav-bar">
        <div className="nav-logo">
          <img src={logo} alt=''/>
          <p>Shopper</p>
          
        </div>
        <ul className="nav-menu">
          <li onClick={()=> {setMenu('shop')}}><Link to='/' style={{textDecoration: 'none',color:'black'}}>Shop</Link> {menu === 'shop'? <hr/>:''}</li>
          <li onClick={()=> {setMenu('men')}}><Link to='/men' style={{textDecoration: 'none',color:'black'}}>Men </Link>{menu === 'men'? <hr/>:''}</li>
          <li onClick={()=> {setMenu('women')}}><Link to='/women' style={{textDecoration: 'none',color:'black'}}>Women </Link>{menu === 'women'? <hr/>:''}</li>
          <li onClick={()=> {setMenu('kids')}}><Link to='/kids'style={{textDecoration: 'none',color:'black'}}> Kids </Link>{menu === 'kids'? <hr/>:''}</li>
        </ul>
        <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'> <img src={cart_icon} alt=''/></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

      </div>
    )
}

export default Navbar