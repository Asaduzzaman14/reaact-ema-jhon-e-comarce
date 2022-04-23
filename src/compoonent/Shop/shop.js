import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts/useProducts';
import { addToDb, getStoredcart } from '../../utilities/fakedb'
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    // const [products, setProducts] = useProducts()
    const [products] = useProducts()
    const [cart, setCart] = useState([])


    useEffect(() => {
        const storedCart = getStoredcart()
        const savecart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savecart.push(addedProduct)
            }
        }
        setCart(savecart)

    }, [products])


    const handelAddToCart = (selectedProduct) => {
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(selectedProduct.id)
    }


    return (
        <div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        products.map(product => <Product
                            key={product._id}
                            product={product}
                            handelAddToCart={handelAddToCart}

                        ></Product>)
                    }
                </div>

                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/orders">
                            <button className='cart-btn'>Review Order </button>
                        </Link>
                    </Cart>

                </div>
            </div>
        </div>
    );
};

export default Shop;