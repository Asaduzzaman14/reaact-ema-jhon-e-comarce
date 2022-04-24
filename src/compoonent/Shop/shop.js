import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../Hooks/useProducts/useProducts';
import { addToDb, getStoredcart } from '../../utilities/fakedb'
import Cart from '../cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
    // const [products, setProducts] = useProducts()
    // const [products] = useProducts()
    const [cart, setCart] = useState([])
    const [pageCount, setpageCount] = useState(0)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(10)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size])



    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10)
                setpageCount(pages)
            })
    }, [])



    useEffect(() => {
        const storedCart = getStoredcart()
        const savecart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id)
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
        const exists = cart.find(product => product._id === selectedProduct._id)
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        } else {
            const rest = cart.filter(product => product._id !== selectedProduct._id)
            exists.quantity = exists.quantity + 1
            newCart = [...rest, exists]
        }

        setCart(newCart)
        addToDb(selectedProduct._id)
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


                    <div className='pagination'>
                        {
                            [...Array(pageCount).keys()]
                                .map(number => <button
                                    className={page === number ? 'selected style' : 'style'} onClick={() => setPage(number)}>{number}</button>)

                        }

                        <select onChange={(e) => setSize(e.target.value)}>
                            <option value="5">5</option>
                            <option value="10" selected>10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                        </select>
                    </div>
                </div>

                <div className="cart-container">
                    <Cart cart={cart}>
                        <Link to="/orders">
                            <button className='cart-btn'>Review Order </button>
                        </Link>
                    </Cart>

                </div>
            </div>
        </div >
    );
};

export default Shop;