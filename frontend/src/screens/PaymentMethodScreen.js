import React, { useState } from "react";
import CheckoutSteps from "../components/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../actions/cartActions";
function PaymentMethodScreen(props) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress.address) {
    props.history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    props.history.push("/placeorder");
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="PaymentForm">
        <form className="form" onSubmit={submitHandler}>
          <div>
            <h1 style={{fontSize:"25px", color: "#000033"}}>Payment Method</h1>
          </div>
          <div>
            <div>
              <input
                type="radio"
                id="paypal"
                value="PayPal"
                name="paymentMethod"
                required
                checked
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></input>
              <label htmlFor="paypal">PayPal</label>
            </div>
          </div>

          <div>
            <button className="primary" type="submit">
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentMethodScreen;
