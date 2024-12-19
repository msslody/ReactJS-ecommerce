import React, { useState, useEffect } from 'react';

export default function MainCheckout({ cart }) {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');
  const [formValid, setFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);  
  const [billingDetails, setBillingDetails] = useState({
    country: '',
    firstName: '',
    lastName: '',
    address: '',
    stateCountry: '',
    postalZip: '',
    email: '',
    phone: '',
  });

  const totalOrder = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedTotal = totalOrder - discount;

  const handleApplyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'LODY10') {
      setDiscount(totalOrder * 0.1);
      setErrorMessage('');
    } else {
      setDiscount(0);
      setErrorMessage('Invalid coupon code');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails({ ...billingDetails, [name]: value });
  };

  const validateForm = () => {
    const { country, firstName, lastName, address, stateCountry, postalZip, email, phone } = billingDetails;
    if (country && firstName && lastName && address && stateCountry && postalZip && email && phone) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [billingDetails]);

  useEffect(() => {
    const scriptId = "paypal-sdk-script";
    let script = document.getElementById(scriptId);
  
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://www.paypal.com/sdk/js?client-id=ASmGFHR6iNaXa1WO-Hl3WfEQtu1fTvNb-geTWR50pnwc_fUvmb3p0yvX3sXAuwpbvxHK00bj93ctTUxP&currency=USD";
      script.async = true;
  
      script.onload = () => {
        if (window.paypal && formSubmitted && formValid) {
          window.paypal.Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: { value: discountedTotal.toFixed(2) },
                  },
                ],
              });
            },
            onApprove: (data, actions) => {
              return actions.order.capture().then((details) => {
                alert(`Transaction completed by ${details.payer.name.given_name}`);
                window.location.href = "/thankyou";
              });
            },
            onError: (err) => {
              console.error('PayPal Checkout Error:', err);
            },
          }).render('#paypal-button-container');
        }
      };
  
      document.body.appendChild(script);
    }
  
    return () => {
      // Cleanup: Ensure the script is removed if it exists
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, [discountedTotal, formSubmitted, formValid]);  

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true); 
  };

  return (
    <div>
      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-black">Billing Details</h2>
              <div className="p-3 p-lg-5 border bg-white">

                <form onSubmit={handleSubmit}>

                  {/* Billing Details Section */}
                  <div className="form-group">
                    <label htmlFor="c_country" className="text-black">Country <span className="text-danger">*</span></label>
                    <select
                      id="c_country"
                      className="form-control"
                      name="country"
                      value={billingDetails.country}
                      onChange={handleInputChange}
                    >
                      <option value="">Select a country</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Thailand">Thailand</option>
                      <option value="USA">USA</option>
                      <option value="China">China</option>
                      <option value="Japan">Japan</option>
                      <option value="Korea">Korea</option>
                      <option value="France">France</option>
                      <option value="Australia">Australia</option>
                    </select>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_fname" className="text-black">First Name <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_fname"
                        name="firstName"
                        value={billingDetails.firstName}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_lname" className="text-black">Last Name <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_lname"
                        name="lastName"
                        value={billingDetails.lastName}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_address"
                        name="address"
                        value={billingDetails.address}
                        onChange={handleInputChange}
                        placeholder="Street address"
                      />
                    </div>
                  </div>

                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apartment, suite, unit etc. (optional)"
                      id="c_apartment"
                      name="c_apartment"
                    />
                  </div>


                  <div className="form-group row">
                    <div className="col-md-6">
                      <label htmlFor="c_state_country" className="text-black">State / Country <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_state_country"
                        name="stateCountry"
                        value={billingDetails.stateCountry}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_postal_zip" className="text-black">Postal / Zip <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_postal_zip"
                        name="postalZip"
                        value={billingDetails.postalZip}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group row mb-5">
                    <div className="col-md-6">
                      <label htmlFor="c_email_address" className="text-black">Email Address <span className="text-danger">*</span></label>
                      <input
                        type="email"
                        className="form-control"
                        id="c_email_address"
                        name="email"
                        value={billingDetails.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="c_phone" className="text-black">Phone <span className="text-danger">*</span></label>
                      <input
                        type="text"
                        className="form-control"
                        id="c_phone"
                        name="phone"
                        value={billingDetails.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-group row mb-5">
                    <div className="col-md-12 text-center">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-lg py-3 btn-block"
                        disabled={!formValid}
                      >
                        Submit Form
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-md-6">
              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-black">Your Order</h2>
                  <div className="p-3 p-lg-5 border bg-white">
                    <table className="table site-block-order-table mb-5">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cart.map((item) => (
                          <tr key={item.id}>
                            <td>{item.title} <strong className="mx-2">x</strong> {item.quantity}</td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                          </tr>
                        ))}
                        <tr>
                          <td className="text-black font-weight-bold"><strong>Subtotal</strong></td>
                          <td className="text-black font-weight-bold"><strong>${totalOrder.toFixed(2)}</strong></td>
                        </tr>
                        {discount > 0 && (
                          <tr>
                            <td className="text-black font-weight-bold"><strong>Discount</strong></td>
                            <td className="text-black font-weight-bold">-${discount.toFixed(2)}</td>
                          </tr>
                        )}
                        <tr>
                          <td className="text-black font-weight-bold"><strong>Total</strong></td>
                          <td className="text-danger font-weight-bold"><strong>${discountedTotal.toFixed(2)}</strong></td>
                        </tr>
                      </tbody>
                    </table>

                    {/* Coupon Section */}
                    <div className="form-group row mb-4">
                      <div className="col-md-8">
                        <label htmlFor="couponCode" className="text-black">Coupon Code</label>
                        <input
                          type="text"
                          className="form-control"
                          id="couponCode"
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          placeholder="Enter LODY10 for -10% reduction"
                        />
                      </div>
                      <div className="col-md-4">
                        <button
                          type="button"
                          className="btn btn-black mt-4"
                          onClick={handleApplyCoupon}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                    {errorMessage && <div className="text-danger">{errorMessage}</div>}

                  {/* PayPal button will be displayed only after form submission */}
                  {formSubmitted && formValid && (
                    <div className="mb-2">
                      <div id="paypal-button-container"></div>
                    </div>
                  )}
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
