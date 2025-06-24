import { useParams } from "react-router-dom";
import { useState } from "react";
import ShimmerMenu from "./ShimmerMenu";
import useRestrauntMenu from "../utilis/useRestrauntMenu";
import RestrauntCategory from "./RestrauntCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);

  if (!resInfo) return <ShimmerMenu />;

  const {
    name,
    cuisines,
    avgRatingString,
    costForTwoMessage,
    cloudinaryImageId,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const cards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  const categories = cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="max-w-5xl mx-auto px-5 py-10 font-sans">
      {/* Restaurant Header */}
      <div className="bg-white rounded-xl shadow-2xl p-6 mb-10 border border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Image */}
        {cloudinaryImageId && (
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${cloudinaryImageId}`}
            alt={name}
            className="w-36 h-36 object-cover rounded-xl border border-gray-200"
          />
        )}

        {/* Details */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">{name}</h1>
          <div className="text-gray-600 mt-2 text-lg">
            {cuisines?.join(", ")}
          </div>
          <div className="text-sm text-gray-500 mt-1">{costForTwoMessage}</div>
          <div className="mt-3 text-yellow-600 font-semibold text-lg">
            ⭐ {avgRatingString}
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">
          Menu
        </h2>

        <div className="space-y-6">
          {categories.map((cat, index) => (
            <div
              key={cat?.card?.card?.title || index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 p-5 border border-gray-100"
            >
              <RestrauntCategory
                data={cat?.card?.card}
                showMenu={showIndex === index}
                setShowIndex={() =>
                  setShowIndex(showIndex === index ? null : index)
                }
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
