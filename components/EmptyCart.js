import React from "react";
import EmptyCartBg from "./svg-components/EmptyCartBg";
import EmptyCartIcon from "./svg-components/EmptyCartIcon";

const EmptyCart = () => {
  return (
    <>
      <div className="empty-cart-animation">
        <EmptyCartBg />
        <span className="empty-cart">
          <EmptyCartIcon />
        </span>
      </div>
      <div className="add_item text-center">
        <h4>Your cart is empty.</h4>
        <p>Add item to your cart</p>
          
      </div>
    </>
  );
};

export default EmptyCart;
