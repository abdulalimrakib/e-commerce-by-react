import { useState } from "react";
import fakeData from "../fakeData/products.json";
import Cart from "./Cart";

const Shop = () => {
  const [product, setProduct] = useState(fakeData);

  const handleAddProduct = (product) => {};

  return (
    <div className="flex gap-5 ">
      <div className="w-[80%]">
        {product.map((data) => (
          <Cart handleAddProduct={handleAddProduct} product={data}></Cart>
        ))}
      </div>

      <div className="w-[20%] pr-3">
        <div className="text-center">
        <h2 className="text-[22px] font-medium">Order Summary</h2>
        <h4 className="text-[18px] font-medium">Items Orderd: 0</h4>
        </div>
        <div className="flex justify-between">
            <div className="py-3">
                <h5>Items:</h5>
                <h5>Shipping & Handling:</h5>
                <h5>Total Before Tax:</h5>
                <h5>Estimated Tax:</h5>
                <h3 className="text-[22px] font-bold text-red-600 pt-2">Order Total:</h3>
            </div>
            <div className="py-3">
                <h5>$0</h5>
                <h5>$0</h5>
                <h5>$0</h5>
                <h5>$0</h5>
                <h3 className="text-[22px] font-bold text-red-600 pt-2">$0</h3>
            </div>
        </div>
        <button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 font-bold text-white rounded-lg py-1 my-2">Order Review</button>
      </div>
    </div>
  );
};

export default Shop;
