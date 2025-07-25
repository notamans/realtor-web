import Image from "next/image";
import { Award, Users, Home, TrendingUp } from "lucide-react";
import { companyStats } from "@/data/properties";

export default function About() {
  const features = [
    {
      icon: Award,
      title: "Expert Knowledge",
      description:
        "Our team has deep knowledge of local markets and property values.",
    },
    {
      icon: Users,
      title: "Personalized Service",
      description:
        "We provide dedicated support throughout your real estate journey.",
    },
    {
      icon: Home,
      title: "Quality Properties",
      description:
        "Handpicked selection of premium properties in desirable locations.",
    },
    {
      icon: TrendingUp,
      title: "Market Insights",
      description:
        "Stay informed with our comprehensive market analysis and trends.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Real Estate Partner
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              With over 15 years of experience in the real estate industry,
              RealtyPlus has helped hundreds of families find their dream homes.
              Our team of expert agents provides personalized service and market
              insights to ensure you make the best real estate decisions.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {companyStats.propertiesSold}+
                </div>
                <div className="text-gray-600">Properties Sold</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {companyStats.happyClients}+
                </div>
                <div className="text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {companyStats.yearsExperience}+
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">
                  {companyStats.averageDaysOnMarket}
                </div>
                <div className="text-gray-600">Avg. Days on Market</div>
              </div>
            </div>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
              Learn More About Us
            </button>
          </div>

          {/* Image */}
          <div className="relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=800&fit=crop"
              alt="Modern house"
              fill
              className="rounded-2xl shadow-2xl object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600">Top Rated</div>
              <div className="text-gray-600">Real Estate Agency</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
