import React from 'react';
import './Phone.css'
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Phone = (props) => {
    const {name, img, price} = props.product;
    const {buyNow} = props;
    return (
        <div className='col-md-6 col-lg-4 col-sm-12'>
            <div className="card">
            <div className="card-body">
                <img src={img} alt="" />
                <h5 className='phone-name'>Name: {name}</h5>
                <p>Price: ${price}</p>
                <div className="d-grid gap-2">
                    <button onClick={()=> buyNow(props.product)} className='btn btn-primary' type="button">Buy Now  <AiOutlineShoppingCart /></button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Phone;