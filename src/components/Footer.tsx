import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              RealtyPlus
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner in finding the perfect home. We make real
              estate simple, transparent, and stress-free.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#properties"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#agents"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Agents
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/buy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Buy Property
                </Link>
              </li>
              <li>
                <Link
                  href="/sell"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sell Property
                </Link>
              </li>
              <li>
                <Link
                  href="/rent"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Rent Property
                </Link>
              </li>
              <li>
                <Link
                  href="/valuation"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Property Valuation
                </Link>
              </li>
              <li>
                <Link
                  href="/investment"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Investment Advice
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-blue-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-blue-400" />
                <span className="text-gray-300">info@realtyplus.com</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  123 Business Plaza
                  <br />
                  Suite 100
                  <br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 RealtyPlus. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
