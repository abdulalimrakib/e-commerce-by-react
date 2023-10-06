import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between py-2 bg-fuchsia-800 text-white">
        <div>
          <img className="h-[40px]" src={logo} alt="" />
        </div>
        <div className="flex justify-center items-center">
          <nav className="text-center">
            <Link className="px-2 py-4 font-bold hover:bg-fuchsia-900 " to="/shop">
              Shop
            </Link>
            <Link className="px-2 py-4 font-bold hover:bg-fuchsia-900" to="/order-review">
              Order Review
            </Link>
            <Link className="px-2 py-4 font-bold hover:bg-fuchsia-900" to="/inventory">
              Manage Inventory Here
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
