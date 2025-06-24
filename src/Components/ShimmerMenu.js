import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      {/* Restaurant Details Shimmer */}
      <div className="h-6 bg-gray-300 rounded w-1/2 mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-6"></div>

      {/* Menu Items Shimmer */}
      <ul className="space-y-6">
        {Array(6)
          .fill("")
          .map((_, index) => (
            <li
              key={index}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white p-4 rounded-lg shadow"
            >
              {/* Image Placeholder */}
              <div className="w-28 h-24 bg-gray-300 rounded-lg"></div>

              {/* Text Placeholder */}
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ShimmerMenu;
