import { useState } from "react";
import fakeData from "../fakeData/products.json";
import Cart from "./Cart";
import SideArea from "./SideArea";

const Shop = () => {
  const [product, setProduct] = useState(fakeData);
  const [cartProduct, setCartProduct] = useState([]);

  const handleAddProduct = (Product) => {
    let newProductArray = [...cartProduct, Product];
    setCartProduct(newProductArray);
  };

  return (
    <div className="flex gap-5">
      <div className="w-[80%]">
        {product.map((data) => (
          <Cart handleAddProduct={handleAddProduct} product={data}></Cart>
        ))}
      </div>

      {/* right-side area */}
      <div className="w-[20%]">
        <SideArea cartProduct={cartProduct}></SideArea>
      </div>
    </div>
  );
};

export default Shop;
