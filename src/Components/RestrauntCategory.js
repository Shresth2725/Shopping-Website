import ItemList from "./itemList";

const RestrauntCategory = ({ data, showMenu, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); // Will be passed as `() => setShowIndex(index)` from parent
  };

  return (
    <div className="mb-5 rounded-xl border border-gray-400 shadow-sm overflow-hidden">
      {/* Category Header */}
      <div
        className="flex justify-between items-center bg-gray-100 hover:bg-gray-200 cursor-pointer px-5 py-4 transition-all duration-200"
        onClick={handleClick}
      >
        <h2 className="font-semibold text-lg text-gray-800">
          {data?.title}{" "}
          <span className="text-gray-500 font-medium">
            ({data?.itemCards?.length})
          </span>
        </h2>

        {/* Toggle Arrow */}
        <span className="text-xl transition-transform duration-300">
          {showMenu ? "▲" : "▼"}
        </span>
      </div>

      {/* Collapsible Item List */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          showMenu ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="px-5 py-4 bg-white">
          <ItemList cards={data?.itemCards} />
        </div>
      </div>
    </div>
  );
};

export default RestrauntCategory;
