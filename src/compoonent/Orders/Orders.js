import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts/useProducts';
import Cart from '../cart/Cart';
import OrderReview from '../OrderReview/OrderReview';

const Orders = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useCart(products)

    // handel form orderReview Componenet
    const handelRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id)
        setCart(rest)
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
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;