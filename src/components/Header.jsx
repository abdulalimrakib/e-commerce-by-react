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
            <a className="px-2 py-4 font-bold hover:bg-fuchsia-900 " href="/shop">
              Shop
            </a>
            <a className="px-2 py-4 font-bold hover:bg-fuchsia-900" href="/order-review">
              Order Review
            </a>
            <a className="px-2 py-4 font-bold hover:bg-fuchsia-900" href="/manage-inventory-here">
              Manage Inventory Here
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
