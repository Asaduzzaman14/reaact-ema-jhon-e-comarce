import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../cart/Cart';
import OrderReview from '../OrderReview/OrderReview';
// import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)
    const navigate = useNavigate();
    // handel form orderReview Componenet
    const handelRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className="shop-container">
            <div className="review-product-container">
                {
                    cart.map(product => <OrderReview
                        product={product}
                        key={product.id}
                        handelRemoveProduct={handelRemoveProduct}
                    ></OrderReview>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    key={cart.id}
                    cart={cart}

                >
                    <button onClick={() => navigate('/shipment')}>Proceed Shipping </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;