const RestaurantCard = ({ item }) => {
  const { name, avgRating, cuisines, areaName, cloudinaryImageId } = item;

  const imgsrc = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <img
        className="w-full h-48 object-cover"
        src={imgsrc}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <h4 className="text-sm text-yellow-600 font-medium mb-1">⭐ {avgRating}</h4>
        <p className="text-sm text-gray-600 mb-1">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-500">{areaName}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
