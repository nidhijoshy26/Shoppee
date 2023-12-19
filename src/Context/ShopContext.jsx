import React, { createContext, useState } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
    let cart ={}
    for(let i = 0;i < all_product.length+1; i++){
        cart[i]= 0;
    }
    return cart;

}

const ShopContextProvider =(props)=>{
    const [cartItem, setCartItem] = useState(getDefaultCart())
   
    const addToCart = (id) => {
        setCartItem((prev)=> ({...prev,[id]: prev[id]+1}))
    }

    const deleteCartItems =(id)=>{
        setCartItem((prev)=> ({prev,[id]: prev[id]-1}))
        
    }

    const getTotalCartAmount=()=>{
        let totalAmount = 0;
        for(const item in cartItem){
            if(cartItem[item]> 0){
                let itemInfo =all_product.find((p)=>p.id === Number(item))
                totalAmount +=itemInfo.new_price * cartItem[item];
            }
            
        }
        return totalAmount;

    }

    const getTotalCartItems =()=>{
        let totalItems =0;
        for(const item in cartItem){
            if(cartItem[item]> 0){
                totalItems += cartItem[item];
                
            }
        }
        return totalItems;
    }

    const contextValue = {all_product,cartItem,addToCart,deleteCartItems,getTotalCartAmount,getTotalCartItems}

    return (
        <ShopContext.Provider value ={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider