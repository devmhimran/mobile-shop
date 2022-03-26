import React, { useEffect, useState } from 'react';
import Phone from '../Product/Phone';


const Shop = () => {
    const [phone, setPhone] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setPhone(data))
    },[])

    return (
        <div className='shop'>
            <div className="container pt-5">
                <div className="row">
                    <div className='col-md-8 col-lg-8'>
                        <div className="row g-5">
                        {
                            phone.map(productData => <Phone product={productData} ></Phone>)
                        }
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4">
                        <div className="card">
                            <div className="card-body">
                                <h3>Select Your Phone</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;