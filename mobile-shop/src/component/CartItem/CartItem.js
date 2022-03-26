
import React from 'react';
import './CartItem.css'
const CartItem = (props) => {
   const {name, img} = props.cartItem;
    
   return (
    <div className='d-flex cart-item'>
        <img className='cart-image' src={img} alt="" />
        <p>{name}</p>
    </div>
)};

export default CartItem;