import React from 'react';

export default function ProductCard({ image, title, price, onAddToCart }) {
  return (
    <div>
      <div className="untree_co-section product-section before-footer-section ">
        <div className="container">
          <div className="row">
            <div>
              <a className="product-item ">
                <img
                  src={image || 'https://blocks.astratic.com/img/general-img-portrait.png'}
                  className="img-fluid product-thumbnail"
                  style={{ maxHeight: '300px' }}
                />
                <h3 className="product-title">{title}</h3>
                <strong className="product-price">${price}</strong>

                <span 
                  className="icon-cross" 
                  onClick={onAddToCart}
                >
                  <img src="images/cross.svg" className="img-fluid" alt="Add to cart" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
