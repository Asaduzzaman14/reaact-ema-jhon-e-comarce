import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {

    let price = 0;
    let shiping = 0;

    for (const product of cart) {
        price = price + product.price
        shiping = shiping + product.shipping
    }
    let txt = (price * 0.1).toFixed(2)
    let grandtotal = price + shiping + parseFloat(txt)

    return (
        <div className='cart'>

            <h4>Order Summery</h4>
            <p>Selected item : {cart.length}</p>
            <p>Total Price: ${price}</p>
            <p>Total Shiping: ${shiping} </p>
            <p>tax: ${txt} </p>
            <h4>grand Total: $ {grandtotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;