import React from "react";
import { Link } from "react-router-dom";

const SideArea = (props) => {
  let orderTotal;
  let estimatedTax;
  let totalPriceBeforeTex;
  let shippingCharge = 7.5;
  let totalPrice = 0;

  for (let i = 0; i < props.cartProduct.length; i++) {
    totalPrice = totalPrice + props.cartProduct[i].price;
  }

  if (totalPrice <= 0 || totalPrice >= 150) {
    shippingCharge = 0;
  }

  totalPriceBeforeTex = totalPrice + shippingCharge;

  estimatedTax = (5 / 100) * totalPriceBeforeTex;

  orderTotal = totalPriceBeforeTex + estimatedTax;

  return (
    <div className="w-full">
      <div className="text-center">
        <h2 className="text-[22px] font-medium">Order Summary</h2>
        <h4 className="text-[18px] font-medium">
          Items Orderd: {props.cartProduct.length}
        </h4>
      </div>
      <div className="flex justify-between">
        <div className="py-3">
          <h5>Items:</h5>
          <h5>Shipping & Handling:</h5>
          <h5>Total Before Tax:</h5>
          <h5>Estimated Tax:</h5>
          <h3 className="text-[22px] font-bold text-red-600 pt-2">
            Order Total:
          </h3>
        </div>
        <div className="py-3">
          <h5>${totalPrice.toFixed(2)}</h5>
          <h5>${shippingCharge.toFixed(2)}</h5>
          <h5>${totalPriceBeforeTex.toFixed(2)}</h5>
          <h5>${estimatedTax.toFixed(2)}</h5>
          <h3 className="text-[22px] font-bold text-red-600 pt-2">
            ${orderTotal.toFixed(2)}
          </h3>
        </div>
      </div>
      <Link to="/order-review">
        <button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 font-bold text-white rounded-lg py-1 my-2">
          Order Review
        </button>
      </Link>
    </div>
  );
};

export default SideArea;
