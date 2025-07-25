"use client";

import { useState } from "react";
import { Search, MapPin, Home, DollarSign } from "lucide-react";

export default function Hero() {
  const [searchType, setSearchType] = useState<"buy" | "rent">("buy");
  const [location, setLocation] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log({ searchType, location, propertyType, priceRange });
  };

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&h=1080&fit=crop")',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover the perfect property with our expert real estate team. From
            luxury condos to family homes, we make your dreams a reality.
          </p>
        </div>

        {/* Search Form */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <button
              onClick={() => setSearchType("buy")}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                searchType === "buy"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Buy
            </button>
            <button
              onClick={() => setSearchType("rent")}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
                searchType === "rent"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Rent
            </button>
          </div>

          <form
            onSubmit={handleSearch}
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
          >
            <div className="relative">
              <MapPin
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>

            <div className="relative">
              <Home
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none"
              >
                <option value="">Property Type</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="apartment">Apartment</option>
                <option value="townhouse">Townhouse</option>
              </select>
            </div>

            <div className="relative">
              <DollarSign
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 appearance-none"
              >
                <option value="">Price Range</option>
                {searchType === "buy" ? (
                  <>
                    <option value="0-500000">Under $500K</option>
                    <option value="500000-1000000">$500K - $1M</option>
                    <option value="1000000-2000000">$1M - $2M</option>
                    <option value="2000000+">$2M+</option>
                  </>
                ) : (
                  <>
                    <option value="0-2000">Under $2,000</option>
                    <option value="2000-3500">$2,000 - $3,500</option>
                    <option value="3500-5000">$3,500 - $5,000</option>
                    <option value="5000+">$5,000+</option>
                  </>
                )}
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 font-semibold"
            >
              <Search size={20} />
              Search
            </button>
          </form>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold">1,200+</div>
            <div className="text-blue-200">Properties Sold</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">950+</div>
            <div className="text-blue-200">Happy Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">15+</div>
            <div className="text-blue-200">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold">18</div>
            <div className="text-blue-200">Avg. Days on Market</div>
          </div>
        </div>
      </div>
    </div>
  );
}
