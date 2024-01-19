import React from 'react'
import { useCart } from './context/CartContext';
import Navbar from './components/Navbar';

const UserCart = () => {
    const{cartItems,addToCart,removeFromCart}=useCart();
  return (
    <>
    <Navbar/>
    <h1>Your Cart details</h1>
     <div>
        {cartItems.map((item,index)=>(
            <div className='cart-section' key={index}>
                  <div className='cart-img'>
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.product}</h3>
                    <h3>{item.price}</h3>
                    <h3>{item.model}</h3>
                  </div>
                  <div className="cart-remove">
                    <button onClick={()=>removeFromCart(item)}>Remove</button>
                  </div>
            </div>
        ))}
     </div>
    </>
  )
}

export default UserCart