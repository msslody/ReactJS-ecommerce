import React from 'react';
import { Link } from 'react-router-dom';

export default function MainCart({ cart, increaseQuantity, decreaseQuantity, removeFromCart }) {
  console.log("cart",cart);
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
    <div className="site-blocks-table">
      {cart.length > 0 ? (
        <table className="table align-middle mt-2 " >
          <thead>
            <tr>
              <th>Image</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.title} width="80" style={{margin:'10px'}} />
                </td>
                <td>{item.title}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <button className='btn btn-outline-black decrease' onClick={() => decreaseQuantity(item.id)}>-</button>
                  <input type="text" className="input-value-cart text-center quantity-amount" value={item.quantity} readOnly />
                  
                  <button className='btn btn-outline-black increase' onClick={() => increaseQuantity(item.id)}>+</button>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button className='btn btn-black btn-sm' onClick={() => removeFromCart(item.id)}>X</button>
                </td>
              </tr>
             
            ))}
          </tbody>
        </table>
      ) : (
         <h1 className='text-center mt-5'>Your cart is empty!</h1>
      )}
    </div>
    
    
    <div className="container mt-3">
             <div className="row">
                <div className="col-md-6">
                  <div className="row mb-5">
                    <div className="col-md-6">
                      <Link to="/shop" className="btn btn-outline-black btn-sm btn-block">Continue Shopping</Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pl-5">
                  <div className="row justify-content-end">
                    <div className="col-md-7">
                      <div className="row">
                        <div className="col-md-12 text-right border-bottom mb-5">
                          <h3 className="text-black h4 text-uppercase">Cart Total</h3>
                        </div>
                      </div>
                      <div className="row mb-5">
                        <div className="col-md-6">
                          <span className="text-black">Total</span>
                        </div>
                        <div className="col-md-6 text-right">
                        <strong className="text-black">${subtotal.toFixed(2)}</strong>

                        </div>
                      </div>
        
                      <div className="row">
                        <div className="col-md-12">

                          <Link
                            to="/checkout"
                            state={{ cart }} 
                            className="btn btn-black btn-lg py-3 btn-block"
                            onClick={() => console.log('Navigating to Checkout with:', cart)}
                          >
                            Proceed To Checkout
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
    

    
    </>
  );
}
