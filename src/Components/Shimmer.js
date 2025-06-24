const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 max-w-screen-xl mx-auto">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow animate-pulse space-y-3"
          >
            <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
