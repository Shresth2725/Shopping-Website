import { useDispatch } from "react-redux";
import { removeItem } from "../utilis/cartSlice";
const CartItem = ({ cards = [] }) => {
  const dispatch = useDispatch();

  const handleRemoveItem = (item) => {
    // Pass the correct object with 'id' property
    dispatch(removeItem(item.card.info));
  };

  return (
    <div className="space-y-5">
      {cards.map((item, index) => {
        const { info } = item.card;

        return (
          <div
            key={info?.id || `${info?.name}-${index}`}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              {/* Image */}
              {info?.imageId && (
                <img
                  className="w-24 h-20 object-cover rounded-lg flex-shrink-0 border border-gray-100"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300/${info.imageId}`}
                  alt={info?.name}
                />
              )}

              {/* Info */}
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-800">
                  {info?.name}
                </h4>
                <p className="text-gray-700 font-medium mt-1">
                  ₹{(info?.price || info?.defaultPrice || 0) / 100}
                </p>
                {info?.description && (
                  <p className="text-sm text-gray-500 mt-1 leading-snug">
                    {info.description}
                  </p>
                )}
              </div>

              {/* Remove Button */}
              <div className="mt-3 sm:mt-0">
                <button
                  className="px-4 py-2 bg-red-500 text-white text-sm font-semibold rounded-full hover:bg-red-600 transition duration-200"
                  onClick={handleRemoveItem(item)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
