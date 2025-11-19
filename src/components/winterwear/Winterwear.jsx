import React, { useState, useEffect } from "react";
import {
  Heart,
  ChevronDown,
  ChevronUp,
  X,
  ArrowUpDown,
  SlidersHorizontal,
} from "lucide-react";

export default function WinterwearProductPage() {
  const [expandedFilters, setExpandedFilters] = useState({ Color: true });
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSort, setSelectedSort] = useState("Recommended");

  // Mobile Modal States
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isMobileSortOpen, setIsMobileSortOpen] = useState(false);

  // Prevent background scrolling when modals are open
  useEffect(() => {
    if (isMobileFilterOpen || isMobileSortOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileFilterOpen, isMobileSortOpen]);

  const filterCategories = [
    "Size",
    "Categories",
    "Patterns",
    "Fabric",
    "Neck/Collar",
    "Sleeves",
    "Fit",
    "Price Range",
  ];

  const colors = [
    { name: "Beige", code: "#F5F5DC", count: 7 },
    { name: "Black", code: "#000000", count: 22 },
    { name: "Blue", code: "#4169E1", count: 16 },
    { name: "Brown", code: "#8B4513", count: 11 },
    { name: "Green", code: "#228B22", count: 16 },
  ];

  const filterButtons = [
    { name: "View All", active: true },
    { name: "Sweatshirts", active: false },
    { name: "Jackets", active: false },
    { name: "Hoodies", active: false },
  ];

  const sortOptions = [
    "Recommended",
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
  ];

  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&h=600&fit=crop",
      title: "Pecan Brown Elbow Patch Sweatshirt",
      subtitle: "Sweatshirts",
      price: 1199,
      originalPrice: 2999,
      discountPercent: "60% off",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
      title: "Off White Elbow Patch Sweatshirt",
      subtitle: "Sweatshirts",
      price: 1199,
      originalPrice: 2999,
      discountPercent: "60% off",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
      title: "Blue BYNG Printed Hoodie",
      subtitle: "Hoodies",
      price: 998,
      originalPrice: 2599,
      discountPercent: "62% off",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=500&h=600&fit=crop",
      title: "Navy Solid Hoodie",
      subtitle: "Hoodies",
      price: 899,
      originalPrice: 2299,
      discountPercent: "61% off",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&h=600&fit=crop",
      title: "Grey Melange Sweatshirt",
      subtitle: "Sweatshirts",
      price: 1099,
      originalPrice: 2799,
      discountPercent: "61% off",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&h=600&fit=crop",
      title: "Olive Green Hoodie",
      subtitle: "Hoodies",
      price: 998,
      originalPrice: 2499,
      discountPercent: "60% off",
    },
  ];

  const toggleFilter = (filter) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const toggleColor = (colorName) => {
    setSelectedColors((prev) =>
      prev.includes(colorName)
        ? prev.filter((c) => c !== colorName)
        : [...prev, colorName]
    );
  };

  // Reusable Filter Content Component
  const FilterContent = () => (
    <div className="divide-y divide-gray-200">
      {/* Color Filter */}
      <div className="border-b border-gray-200">
        <button
          onClick={() => toggleFilter("Color")}
          className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
        >
          <span className="text-sm font-medium text-gray-700">Color</span>
          {expandedFilters.Color ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>

        {expandedFilters.Color && (
          <div className="px-4 pb-4 space-y-3">
            {colors.map((color) => (
              <label
                key={color.name}
                className="flex items-center gap-3 cursor-pointer group"
              >
                <input
                  type="checkbox"
                  checked={selectedColors.includes(color.name)}
                  onChange={() => toggleColor(color.name)}
                  className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <div
                  className="w-6 h-6 rounded border border-gray-300"
                  style={{ backgroundColor: color.code }}
                ></div>
                <span className="text-sm text-gray-700 flex-1">
                  {color.name}
                </span>
                <span className="text-xs text-gray-400">({color.count})</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Other Categories */}
      {filterCategories.map((filter) => (
        <div key={filter}>
          <button
            onClick={() => toggleFilter(filter)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm font-medium text-gray-700">{filter}</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform ${
                expandedFilters[filter] ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white pb-16 md:pb-0">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-xs md:text-sm text-gray-600 flex-wrap">
          <span>HOME</span>
          <span>›</span>
          <span>MENS CLOTHING</span>
          <span>›</span>
          <span className="text-black">WINTERWEAR</span>
        </div>
      </div>

      {/* Filter Buttons (Top Horizontal) */}
      <div className="border-b border-gray-200 sticky top-0 bg-white z-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-3 py-4 overflow-x-auto scrollbar-hide">
            {filterButtons.map((button, index) => (
              <button
                key={index}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full whitespace-nowrap text-xs md:text-sm font-medium transition-colors shrink-0 ${
                  button.active
                    ? "bg-black text-yellow-400"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {button.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar Filters (Hidden on Mobile) */}
          <div className="hidden md:block w-72 shrink-0">
            <div className="border border-gray-200 rounded-lg sticky top-24">
              <div className="p-4 border-b border-gray-200 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5" />
                <span className="font-semibold">Filter</span>
              </div>
              <FilterContent />
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Header & Desktop Sort */}
            <div className="mb-6">
              <h1 className="text-xl md:text-2xl font-bold mb-4">
                WINTERWEAR FOR MEN
              </h1>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 hidden md:block">
                As the weather turns colder, winterwear for men becomes the
                perfect way to stay warm while keeping your style on point.
                Beyoung brings a versatile collection of cozy hoodies,
                pullovers, jackets, and sweatshirts designed for both comfort
                and fashion.
              </p>

              {/* Desktop Sort Dropdown */}
              <div className="hidden md:flex items-center justify-end">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium">Sort By</span>
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-black min-w-[180px]"
                  >
                    {sortOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid - Responsive Columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
              {products.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg mb-3 bg-gray-100">
                    <button className="absolute top-2 right-2 md:top-3 md:right-3 w-7 h-7 md:w-9 md:h-9 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform z-10">
                      <Heart className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                    </button>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-56 md:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-xs md:text-base text-gray-900 mb-1 truncate md:whitespace-normal">
                      {product.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-1 md:mb-2">
                      {product.subtitle}
                    </p>
                    <div className="flex flex-wrap items-baseline gap-1 md:gap-2">
                      <span className="text-sm md:text-lg font-bold text-gray-900">
                        ₹{product.price}
                      </span>
                      <span className="text-xs md:text-sm text-gray-400 line-through">
                        ₹{product.originalPrice}
                      </span>
                      <span className="text-xs md:text-sm text-green-600 font-medium">
                        ({product.discountPercent})
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-40 shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-2 h-14 divide-x divide-gray-200">
          <button
            onClick={() => setIsMobileSortOpen(true)}
            className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-800 active:bg-gray-50"
          >
            <ArrowUpDown className="w-4 h-4" />
            SORT
          </button>
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-800 active:bg-gray-50"
          >
            <SlidersHorizontal className="w-4 h-4" />
            FILTER
          </button>
        </div>
      </div>

      {/* Mobile Sort Modal */}
      {isMobileSortOpen && (
        <div
          className="md:hidden fixed inset-0 z-50 flex items-end bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileSortOpen(false)}
        >
          <div
            className="w-full bg-white rounded-t-2xl p-4 animate-in slide-in-from-bottom duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
              <h3 className="text-lg font-bold">Sort By</h3>
              <button onClick={() => setIsMobileSortOpen(false)}>
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            <div className="space-y-0">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setSelectedSort(option);
                    setIsMobileSortOpen(false);
                  }}
                  className={`w-full text-left py-4 text-sm font-medium border-b border-gray-50 last:border-0 flex items-center justify-between ${
                    selectedSort === option ? "text-black" : "text-gray-500"
                  }`}
                >
                  {option}
                  {selectedSort === option && (
                    <div className="w-2 h-2 rounded-full bg-black"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Filter Modal */}
      {isMobileFilterOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white animate-in slide-in-from-bottom duration-300 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
            <h2 className="text-lg font-bold">Filters</h2>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="p-1"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            <FilterContent />
          </div>

          {/* Footer Actions */}
          <div className="p-4 border-t border-gray-200 grid grid-cols-2 gap-4">
            <button
              onClick={() => {
                setSelectedColors([]);
                setExpandedFilters({});
              }}
              className="py-3 text-sm font-semibold text-gray-600 border border-gray-300 rounded-full"
            >
              CLEAR ALL
            </button>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="py-3 text-sm font-semibold text-yellow-400 bg-black rounded-full"
            >
              APPLY
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
