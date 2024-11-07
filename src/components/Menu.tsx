import React from 'react'; 

const flavors = [
  {
    name: "Vanilla Bean Dream",
    description: "Madagascar vanilla beans blended into creamy perfection",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1570197571499-166b36435e9f?auto=format&fit=crop&q=80"
  },
  {
    name: "Double Chocolate Bliss",
    description: "Rich Belgian chocolate with chocolate chips",
    price: "$5.49",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80"
  },
  {
    name: "Strawberry Fields",
    description: "Fresh strawberries in sweet cream",
    price: "$5.29",
    image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80"
  },
  {
    name: "Mint Chip Paradise",
    description: "Cool mint with dark chocolate chips",
    price: "$5.49",
    image: "https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&q=80"
  }
];

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Signature Flavors</h2>
          <p className="text-lg text-gray-600">Discover your new favorite scoop</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {flavors.map((flavor) => (
            <div key={flavor.name} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={flavor.image}
                  alt={flavor.name}
                  className="w-full h-full object-cover transform hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{flavor.name}</h3>
                <p className="text-gray-600 mb-4">{flavor.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-pink-500 font-bold">{flavor.price}</span>
                  <button className="text-pink-500 hover:text-pink-600 font-medium">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}