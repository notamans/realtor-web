"use client";

import { useState } from "react";
import PropertyCard from "./PropertyCard";
import { mockProperties } from "@/data/properties";

export default function Properties() {
  const [filter, setFilter] = useState<"all" | "for-sale" | "for-rent">("all");

  const filteredProperties = mockProperties.filter((property) => {
    if (filter === "all") return true;
    return property.status === filter;
  });

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties, from luxury
            condos to family homes in prime locations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-lg p-1 shadow-md">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                filter === "all"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              All Properties
            </button>
            <button
              onClick={() => setFilter("for-sale")}
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                filter === "for-sale"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              For Sale
            </button>
            <button
              onClick={() => setFilter("for-rent")}
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${
                filter === "for-rent"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              For Rent
            </button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
