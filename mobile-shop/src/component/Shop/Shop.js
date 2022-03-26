import React, { useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import Phone from '../Product/Phone';
import './Shop.css';
import { RiDeleteBinLine } from 'react-icons/ri';

const Shop = () => {
    const [phone, setPhone] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setPhone(data))
    },[])

  
    const buyNow = (phone)=>{
        
        let findPhone = cart.find(cartFind => cartFind.id == phone.id)
        if(findPhone){
            alert('Already Exists');
        }else{
            if(cart.length >= 4){
                alert('Cannot Add More Than 4');
            }else{
                const newCart = [...cart,phone ];
                setCart(newCart);
            }
        }  
    }
    const chooseOne = ()=> {
        const randomNum = Math.round(Math.random() * cart.length);
        let phoneChoose = [];
        if( randomNum <  cart.length){
            let randomPhoneChoose = cart[randomNum];
            const newPhone = [...phoneChoose, randomPhoneChoose];
            setCart(newPhone);
        }else{
            chooseOne();
        }
    }
    const cartRemove = ()=>{
        setCart([]);
    }
    return (
        <div className='shop'>
            <div className="container py-5">
                <div className="row">
                    <div className='col-md-8 col-lg-8'>
                        <div className="row g-5">
                        {
                            phone.map(productData => <Phone key={productData.id} product={productData} buyNow={buyNow}></Phone>)
                        }
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="card cart shadow">
                            <div className="card-body ">
                                <h3>Select Your Phone</h3>
                                <p>Selected Item: </p>
                                {
                                cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)
                                }
                            </div>
                            <div className="d-grid gap-2">
                                <button onClick={chooseOne} className='btn btn-primary' type="button">Choose One</button>
                                <button onClick={cartRemove} className='btn btn-primary' type="button">Clear Cart <RiDeleteBinLine/> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;