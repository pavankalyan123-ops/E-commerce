import React from 'react'
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
const Navbar = () => {
    const{cartItems}=useCart();
  return (
    <>
    <div className="navSection">
        <div className="title">
            <Link to="/">
            <h2>E-Mart</h2>
            </Link>
            
        </div>
        <div className="search">
            <input type="text" placeholder="Search ...." />
        </div>
        <div className="user">
            <div className="user-detail">
                SignIN/SignUP
            </div>
            <Link to="/cart">
            <div className="cart">
                cart
                <span>{cartItems.length}</span>
            </div>
            </Link>
            
        </div>
    </div>
    <div className="subMenu">
        <ul>
            <Link to="/mobiles">
            <li>Mobiles</li>
            </Link>
            <Link to="/computers">
            <li>Computers</li>
            </Link>
            <Link to="/watches">
            <li>Watches</li>
            </Link>
            <Link to="/mens">
            <li>Men Wear</li>
            </Link>
            <Link to="/womans">
            <li>Woman Wear</li>
            </Link>
            
            <li>Books</li>
            <li>Fridge</li>
            <li>Speakers</li>
            <li>Tv</li>
            <Link to="/furnitures">
            <li>Furniture</li>
            </Link>
            <Link to="/acs">
            <li>AC</li>
            </Link>
            <Link to="/kitchens">
            <li>Kitchen</li>
            </Link>
            
        </ul>
    </div>
    </>
  )
}

export default Navbar