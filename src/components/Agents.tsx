import Image from "next/image";
import { Phone, Mail, Award, Home } from "lucide-react";
import { mockAgents } from "@/data/properties";

export default function Agents() {
  return (
    <section id="agents" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Agents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our experienced team of real estate professionals is dedicated to
            helping you find the perfect property and navigate the buying or
            selling process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockAgents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Agent Photo */}
              <div className="relative h-64">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Agent Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {agent.name}
                </h3>
                <p className="text-blue-600 font-medium mb-4">{agent.title}</p>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {agent.bio}
                </p>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">
                    Specialties:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {agent.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-center">
                  <div>
                    <div className="flex items-center justify-center text-blue-600 mb-1">
                      <Award size={16} className="mr-1" />
                      <span className="text-sm font-semibold">
                        {agent.experience} Years
                      </span>
                    </div>
                    <span className="text-xs text-gray-600">Experience</span>
                  </div>
                  <div>
                    <div className="flex items-center justify-center text-blue-600 mb-1">
                      <Home size={16} className="mr-1" />
                      <span className="text-sm font-semibold">
                        {agent.propertiesSold}
                      </span>
                    </div>
                    <span className="text-xs text-gray-600">
                      Properties Sold
                    </span>
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone size={16} className="mr-2" />
                    <span>{agent.phone}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail size={16} className="mr-2" />
                    <span>{agent.email}</span>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Contact Agent
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
