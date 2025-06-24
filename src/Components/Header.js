import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utilis/UserContext";
import { useSelector } from "react-redux";

function Header() {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const {loggedInUser} = useContext(UserContext) ;

  const cart = useSelector((store) => store.cart.items);
  console.log(cart);
  

  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <img
          className="w-12 h-12 rounded-full"
          src="https://img.freepik.com/free-vector/burger-cheese-with-fire-cartoon-vector-icon-illustration-food-object-icon-concept-isolated-premium_138676-5539.jpg?w=826&t=st=1695148160~exp=1695148760~hmac=15fbe29d7fb2f694e05ac95449f779d2228e6c1f46233dfd51c55f3bf5db4bdc"
          alt="logo"
        />
        <h1 className="text-xl font-semibold text-gray-800">Foodie Town</h1>
      </div>

      <nav>
        <ul className="flex items-center space-x-6 text-gray-700 font-medium">
          <li className="hover:text-red-500 transition"><Link to="/">Home</Link></li>
          <li className="hover:text-red-500 transition"><Link to="/about">About Us</Link></li>
          <li className="hover:text-red-500 transition"><Link to="/contact">Contact Us</Link></li>
          <li className="hover:text-red-500 transition"><Link to="/Grocery">Grocery</Link></li>
          <li className="hover:text-red-500 transition"><Link to="/Cart">Cart({cart.length})</Link></li>


          <button
            onClick={() => {
              setbtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
            className="ml-4 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition"
          >
            {btnNameReact}
          </button>


          <li className="hover:text-red-500 transition">{loggedInUser}</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
