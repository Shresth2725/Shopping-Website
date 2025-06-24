import { useState, useEffect , useContext} from "react";
import RestaurantCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import UserContext from "../utilis/UserContext.js";

const Body = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [listOfFilteredRestaurants, setListOfFilteredRestaurants] = useState([]);

  const {   setUserName } = useContext(UserContext) ; 

  useEffect(() => {
    fetchAPI();
  }, []);

  const fetchAPI = async () => {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const apiUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    try {
      const response = await fetch(proxy + apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Full API response:", data);

      const restaurants =
        data?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      // console.log("Extracted Restaurants:", restaurants);

      setListOfRestaurants(restaurants);
      setListOfFilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    const searchValue = searchTerm.toLowerCase().trim();
    const filteredResults = listOfRestaurants.filter((item) =>
      item?.info?.name?.toLowerCase().includes(searchValue)
    );
    setListOfFilteredRestaurants(filteredResults);
  };

  const filterTopRated = () => {
    const topRatedRestaurants = listOfRestaurants.filter(
      (item) => item?.info?.avgRating >= 4 
    );
    setListOfFilteredRestaurants(topRatedRestaurants);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1 className="text-center text-xl mt-10 text-red-600">Looks like you're offline.</h1>;

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    
    <div className="p-4 max-w-screen-xl mx-auto">
            {/* <label>UserName</label>
            <input className="p-5 border-2" onChange={(e) => setUserName(e.target.value)}/> */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex gap-2 w-full md:w-1/2">
          <input
            type="search"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
            placeholder="Search for restaurants..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            onClick={handleSearchClick}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Search
          </button>
        </div>
        <button
          onClick={filterTopRated}
          className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition"
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {listOfFilteredRestaurants.length > 0 ? (
          listOfFilteredRestaurants.map((item) =>
            item?.info?.id ? (
              <Link key={item.info.id} to={"/RestrauntMenu/" + item.info.id}>
                <RestaurantCard item={item.info} />
              </Link>
            ) : null
          )
        ) : (
          <p className="col-span-full text-center text-gray-500">No restaurant data available.</p>
        )}
      </div>


    </div>
  );
};

export default Body;
