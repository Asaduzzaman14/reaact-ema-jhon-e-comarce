import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderReview.css'

const OrderReview = (props) => {

    const { handelRemoveProduct, product } = props
    const { name, img, shipping, quantity, price, } = props.product
    return (
        <div className='orderItem'>
            <div className='order-detail'>
                <div>
                    <img src={img} alt="" />
                </div>
                <div className='detail'>
                    <p title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p> <span>price: ${price}</span></p>
                    <p> <small>Sihping: ${shipping}</small></p>
                    <p> <small>Quantity: ${quantity}</small></p>
                </div>
            </div>

            <div>
                <button onClick={() => handelRemoveProduct(product)} className='delete-icon'>
                    <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default OrderReview;