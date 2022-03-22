import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({ handelAddToCart, product }) => {
    // console.log(props.product);

    const { img, name, seller, price, ratings } = product

    return (
        <div className='product'>

            <img src={img} alt="" />

            <div className="product-info">
                <p className='product-name'>{name}</p>

                <p><small>Price: {price} $</small></p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Retings: {ratings} stars</small></p>

            </div>
            <button onClick={() => handelAddToCart(product)} className='btn-cart'>
                <p> Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;