import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Shop */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Necklaces
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Bracelets
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Rings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Earrings
              </a>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Policies</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Delivery Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Track Order
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="hover:text-gray-400">
              <Facebook />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Instagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Twitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <Linkedin />
            </a>
          </div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <form className="flex">
            <input type="email" placeholder="Your email" className="px-3 py-2 w-full text-gray-900 rounded-l-md focus:outline-none" />
            <button className="bg-gray-700 px-4 py-2 rounded-r-md hover:bg-gray-600">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">{"© 2025 Naya's Jewelry. All Rights Reserved."}</div>
    </footer>
  )
}

export default Footer
