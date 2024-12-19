import React from 'react'

export default function ProductHome({ image, title, price, onAddToCart }) {
  return (
    <>
      {/* Product Item */}
      <div className="container">
        <div className="row">
          <div className="product-item">
            <img src={image} alt={title} className="img-fluid product-thumbnail"/>
            <h3 className="product-title">{title}</h3>
            <strong className="product-price">${price}</strong>
            <span className="icon-cross" onClick={onAddToCart}>
              <img src="images/cross.svg" alt="cross" className="img-fluid"/>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
