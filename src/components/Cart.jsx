import { Link } from "react-router-dom";

const cart = (props) => {
  //console.log(props.product.key);
  return (
    <div className="flex gap-5 items-center py-2 border-r-2 border-b-2 ml-16">
      <div className="w-[20%]">
        <img src={props.product.img} alt="" />
      </div>
      <div className="w-[75%]">
        <h3 className="font-bold text-[18px]"><Link to={"/shop/"+ props.product.key}>{props.product.name}</Link></h3>
        <p className="py-3">by: {props.product.seller}</p>
        <h4 className="py-2">${props.product.price}</h4>
        <p>Only {props.product.stock} left in stock - order soon</p>
        {props.showAddToCart && <button onClick={() => {props.handleAddProduct(props.product)}} className="my-2 py-1 px-5 font-bold bg-fuchsia-600 rounded-lg hover:bg-fuchsia-700 text-white"><i class="fa-solid fa-cart-shopping "></i> add to cart</button>}
      </div>
    </div>
  );
};

export default cart;
