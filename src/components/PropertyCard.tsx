import Image from "next/image";
import { Bed, Bath, Square, MapPin, Car } from "lucide-react";
import { Property } from "@/data/properties";
import { formatPrice, formatSquareFeet } from "@/lib/utils";

interface PropertyCardProps {
  property: Property;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const isRental = property.status === "for-rent";

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-64">
        <Image
          src={property.images[0]}
          alt={property.title}
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              property.status === "for-sale"
                ? "bg-green-100 text-green-800"
                : property.status === "for-rent"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {property.status === "for-sale"
              ? "For Sale"
              : property.status === "for-rent"
              ? "For Rent"
              : property.status === "sold"
              ? "Sold"
              : "Rented"}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-lg font-bold text-gray-900">
            {isRental
              ? `$${formatPrice(property.price)}/mo`
              : formatPrice(property.price)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {property.title}
        </h3>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.address}</span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4 text-sm text-gray-600">
          {property.bedrooms > 0 && (
            <div className="flex items-center">
              <Bed size={16} className="mr-1" />
              <span>
                {property.bedrooms} bed{property.bedrooms > 1 ? "s" : ""}
              </span>
            </div>
          )}
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>
              {property.bathrooms} bath{property.bathrooms > 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center">
            <Square size={16} className="mr-1" />
            <span>{formatSquareFeet(property.squareFeet)}</span>
          </div>
        </div>

        {property.garage > 0 && (
          <div className="flex items-center text-sm text-gray-600 mb-4">
            <Car size={16} className="mr-1" />
            <span>{property.garage} car garage</span>
          </div>
        )}

        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
          {property.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {property.amenities.slice(0, 3).map((amenity, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {amenity}
            </span>
          ))}
          {property.amenities.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              +{property.amenities.length - 3} more
            </span>
          )}
        </div>

        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
          View Details
        </button>
      </div>
    </div>
  );
}
