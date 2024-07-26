import { useState, useEffect } from "react";
import { plantsArray } from "../data/plants";

export const useCart = () => {

    const [plantsState] = useState(plantsArray);

    const initialArray = JSON.parse(localStorage.getItem('cartPlants')) ?? [];

    const [cart, setCart] = useState(initialArray);

    useEffect(() => {
        localStorage.setItem('cartPlants', JSON.stringify(cart));
    }, [cart])

    const addToCart = (item) => {
        const itemExist = cart.some((product) => {
            return product.id === item.id
        })

        if (itemExist) {

            const cartUpdate = cart.map((product) => {
                if (product.id === item.id && item.amount < 5) {
                    product.amount++;
                    return product;
                } else {
                    return product;
                }
            })

            setCart(cartUpdate);

        } else {
            item.amount = 1;
            setCart([...cart, item]);
        }

    }

    const incrementAmount = (id) => {
        const cartUpdate = cart.map((item) => {
            if (item.id === id && item.amount < 5) {
                item.amount++;
                return item;
            } else {
                return item;
            }
        })

        setCart(cartUpdate);
    }

    const decrementAmount = (id) => {
        const cartUpdate = cart.map((item) => {
            if (item.id === id && item.amount > 1) {
                item.amount--;
                return item;
            } else {
                return item;
            }
        })

        setCart(cartUpdate);
    }

    const deleteItem = (id) => {
        const cartUpdate = cart.filter((item) => {
            return item.id !== id;
        })

        setCart(cartUpdate);
    }

    const totalCart = ()=>{
        return cart.reduce((total, item) => total + (item.amount * item.price), 0);
    }

    return {
        plantsState,
        cart,
        setCart,
        addToCart,
        incrementAmount,
        decrementAmount,
        deleteItem,
        totalCart
    }
}