import React from 'react';

const Phone = (props) => {
    return (
        <div className='col-md-6 col-lg-4 col-sm-12'>
            <div className="card">
            <div className="card-body">
            <h1>This is product page</h1>
            <img src={props.product.img} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Phone;