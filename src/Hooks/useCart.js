import { useEffect, useState } from "react"
import { getStoredcart } from "../utilities/fakedb"

const useCart = (products) => {
    // console.log(products);
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = getStoredcart()
        const saveCart = []
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    }, [products])

    return [cart, setCart]

}
export default useCart