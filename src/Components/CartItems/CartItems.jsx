import React, { useContext } from 'react'
import './Cartitems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
import _ from 'lodash'

const CartItems = () => {
    const {all_product,cartItem,deleteCartItems,getTotalCartAmount} = useContext(ShopContext)
  return (
      <div className='cartItems'>
          <div className="ctitem-main-format">
              <p>Products</p>
              <p>Title</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
              <p>Remove</p>
              <hr />
          </div>
          {all_product.map((e)=>{
                if(cartItem[e.id]>0){
                    return (
                        <div>
                  <div className="cat-items-format ctitem-main-format">
                      <img src={e.image} alt='' className='cart-icon' />
                      <p>{e.name}</p>
                      <p>${e.new_price}</p>
                      <button className='cartitems-quantity'>{cartItem[e.id]}</button>
                      <p>${(e.new_price)*(cartItem[e.id])}</p>
                      <img src={remove_icon} alt='' className='cart-remove-icon' onClick={()=>{deleteCartItems(e.id)}}/>
                  </div>
                  <hr/>
              </div>
                    )
                }

                return null;
              })}
              <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-toatlItem">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr/>
                        <div className="cartitems-toatlItem">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className="cartitems-toatlItem">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
                <div className="cart-promo">
                    <p>If you have a promo code, Enter it here</p>
                    <div className="cartitem-promobox">
                        <input type='text' placeholder='Promo code'/>
                        <button >Submit</button>
                    </div>
                </div>
              </div>

    </div>
  )
}

export default CartItems