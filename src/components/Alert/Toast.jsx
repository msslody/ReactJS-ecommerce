
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Toast = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Automatically close the toast after 3 seconds
    return () => clearTimeout(timer);
  }, [message, onClose]);
  
  // console.log('Toast is rendering with message:', message);
  return (
    <>
    <div
          style={{
            position: 'fixed',
            top: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: 'grey',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            zIndex: 20,
          }}
        >
          <p >{message}</p>
          <p><Link 
                to="/cart" 
                className='d-flex justify-content-center'
            >
                  View Cart
              </Link>
          </p>
    </div>

    <div className="toast">

    </div>
    </>

  );
};

export default Toast;
