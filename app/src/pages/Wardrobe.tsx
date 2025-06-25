
export const Wardrobe = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-center">Your Wardrobe</h1>
      <div className="text-center space-y-4">
        <p className="text-gray-600">Manage your virtual clothing collection here.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Shirts</h3>
            <p className="text-gray-500">0 items</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Pants</h3>
            <p className="text-gray-500">0 items</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Accessories</h3>
            <p className="text-gray-500">0 items</p>
          </div>
        </div>
      </div>
    </div>
  );
};
