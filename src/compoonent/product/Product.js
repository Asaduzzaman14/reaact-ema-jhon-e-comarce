import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product);

    const { img, name, seller, price, ratings } = props.product

    return (
        <div className='product'>

            <img src={img} alt="" />

            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p><small>Seller: {seller}</small></p>
                <p><small>Retings: {ratings} stars</small></p>

            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;