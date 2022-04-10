import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log(cart);
    const { cart } = props;
    let total = 0;
    let shiping = 0;
    let quantity = 0;

    for (const product of cart) {
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shiping = shiping + product.shipping
    }
    let txt = (total * 0.1).toFixed(2)
    let grandtotal = total + shiping + parseFloat(txt)

    return (
        <div className='cart'>

            <h4>Order Summery</h4>
            <p>Selected item : {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shiping: ${shiping} </p>
            <p>tax: ${txt} </p>
            <h4>grand Total: $ {grandtotal.toFixed(2)}</h4>
            {props.children}
        </div>
    );
};

export default Cart;