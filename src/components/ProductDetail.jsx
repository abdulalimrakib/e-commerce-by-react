import { useParams } from "react-router-dom";
import fakeData from "../fakeData/products.json";
import Cart from "./Cart";

const ProductDetail = () => {
    let {Key} = useParams()
    let product = fakeData.find( pd => pd.key === Key);
    console.log(product);
    return (
        <div>
            <h1>{Key} product details:</h1>
            <Cart showAddToCart = {false} product = {product}></Cart>
        </div>
    );
};

export default ProductDetail;