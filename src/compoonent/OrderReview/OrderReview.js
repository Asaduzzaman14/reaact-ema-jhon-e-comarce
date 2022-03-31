import React from 'react';
import './OrderReview.css'
const OrderReview = (props) => {
    const { name, img, shipping, quantity, price, } = props.product
    return (
        <div className='orderItem'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='dertail'>
                <h2>{name}</h2>
                <h3>price: {price}</h3>
            </div>
            <div className='delete-icon'>

            </div>
        </div>
    );
};

export default OrderReview;