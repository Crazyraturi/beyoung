import React, { useState } from "react";
import { Heart, ChevronDown } from "lucide-react";

export default function TShirtProductPage() {
  const [expandedFilters, setExpandedFilters] = useState({});
  const [selectedSort, setSelectedSort] = useState("Recommended");

  const filterCategories = [
    "Offers",
    "Collection",
    "Color",
    "Size",
    "Categories",
    "Patterns",
    "Fabric",
    "Neck/Collar",
    "Sleeves",
    "Fit",
    "Occasions",
    "Combos",
    "Price Range",
  ];

  const filterButtons = [
    "View All",
    "New Drops",
    "Polo",
    "Regular Fit",
    "Oversized Fit",
    "Full Sleeve",
    "Plain",
  ];

  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop",
      title: "Pick Any 4 - Plain T-Shirt Combo 2.0",
      subtitle: "Regular Fit",
      price: 1099,
      originalPrice: 1516,
      discount: 417,
      badge: "PICK ANY 4",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500&h=600&fit=crop",
      title: "Pick Any 3- Polo T-Shirt Combo",
      subtitle: "Plain Polo T-shirts",
      price: 1399,
      originalPrice: 1647,
      discount: 248,
      badge: "PICK ANY 3",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&h=600&fit=crop",
      title: "Brown Stitch In Time T-Shirt",
      subtitle: "Relaxed Fit",
      price: 599,
      originalPrice: 1199,
      discountPercent: "50% off",
      isNew: true,
    },
  ];

  const toggleFilter = (filter) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>HOME</span>
          <span>›</span>
          <span>MENS CLOTHING</span>
          <span>›</span>
          <span className="text-black">T SHIRTS FOR MEN</span>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto py-4 scrollbar-hide">
            {filterButtons.map((button, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-black text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {button}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <div className="w-64 shrink-0">
            <div className="border border-gray-200 rounded-lg">
              <div className="p-4 border-b border-gray-200 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-black"></div>
                  <div className="w-1 h-4 bg-black"></div>
                  <div className="w-1 h-4 bg-black"></div>
                </div>
                <span className="font-semibold">Filter</span>
              </div>

              <div className="divide-y divide-gray-200">
                {filterCategories.map((filter) => (
                  <div key={filter}>
                    <button
                      onClick={() => toggleFilter(filter)}
                      className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-sm font-medium text-gray-700">
                        {filter}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-500 transition-transform ${
                          expandedFilters[filter] ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-4">T SHIRTS FOR MEN</h1>
              <p className="text-gray-600 text-sm leading-relaxed">
                T-shirts for men just got a major upgrade with Beyoung's latest
                collection. From timeless solids to bold printed styles, every
                Beyoung men's t-shirt is designed for comfort, smart fit, and
                effortless fashion. Whether you're keeping it casual for a
                relaxed day or adding an edge to your outfit, these best
                t-shirts for men deliver on all fronts. Discover versatile,
                stylish options at Beyoung that keep your wardrobe fresh and
                always on-trend. With breathable fabrics, durable quality, and
                standout designs, Beyoung t-shirts for men strike the perfect
                balance between casual and cool—making them the go-to tees men
                actually want to wear every day.
              </p>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium">Sort By</span>
                <select
                  value={selectedSort}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black"
                >
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    {product.isNew && (
                      <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
                        New Arrival
                      </div>
                    )}
                    <button className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform z-10">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <div className="absolute bottom-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded">
                        {product.badge}
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {product.subtitle}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">
                        ₹{product.price}
                      </span>
                      <span className="text-sm text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                      <span className="text-sm text-green-600 font-medium">
                        {product.discountPercent ||
                          `You Save ₹${product.discount}`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
