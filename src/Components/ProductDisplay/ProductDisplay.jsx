import React, { useContext } from 'react'
import './display.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
  const product = props;
  const {addToCart} = useContext(ShopContext)

  return (
    <div className='prd-display'>
      <div className="prd-display-left">
        <div className="display-list">
        <img src={product.product.image} alt=''/>
        </div>
      </div>
      <div className="prd-display-right">
        <h1>{product.product.name}</h1>
        <div className="prd-display-start">
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_icon} alt=''/>
        <img src={star_dull_icon} alt=''/>
        <p>(122)</p>
        </div>
        <div className="prd-dip-right-price">
          <div className="old-price">
            ${product.product.old_price}
          </div>
          <div className="new-price">${product.product.new_price}</div>
        </div>
        <div className="product-description">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
        <div className="product-right-size">
          <h1>Select Size</h1>
          <div className="size-display">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.product.id)}}> Add to Cart</button>
        <p className='right-category'><span>Category: </span>Women,T-Shirt, Crop Top</p>
        <p className='right-category'><span>Tags: </span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay