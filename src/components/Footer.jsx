import React, { useState, useEffect } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import {FaShippingFast, FaShieldAlt, FaTags, FaCreditCard} from 'react-icons/fa';
import "./Header.css"
export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) setShowButton(true);
      else setShowButton(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
    <div className="ouradvantages py-5">
  <h2 className="text-white text-center">Our Advantages</h2>

  <ul className="flex justify-between font-bold mt-5 p-5 text-white">
    
    <li className="flex items-center gap-3">
      <FaShippingFast className="text-red-500 text-3xl" />
      <span className="flex flex-col leading-tight">
        Express Delivery
        <span className="opacity-70">Ships in 24 Hours</span>
      </span>
    </li>

    <li className="flex items-center gap-3">
      <FaShieldAlt className="text-red-500 text-3xl" />
      <span className="flex flex-col leading-tight">
        Brand Warranty
        <span className="opacity-70">100% Original Products</span>
      </span>
    </li>

    <li className="flex items-center gap-3">
      <FaTags className="text-red-500 text-3xl" />
      <span className="flex flex-col leading-tight">
        Exciting Deals
        <span className="opacity-70">On all prepaid orders</span>
      </span>
    </li>

    <li className="flex items-center gap-3">
      <FaCreditCard className="text-red-500 text-3xl" />
      <span className="flex flex-col leading-tight">
        Secure Payments
        <span className="opacity-70">SSL/Secure certificate</span>
      </span>
    </li>

  </ul>
</div>

    <footer className="relative bg-black text-gray-300 px-10 py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* Tech-Shop */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">Tech-Shop</h2>
          <p className="text-sm mb-4">
            Subscribe to our Email alerts to receive<br />
            early discount offers, and new products info.
          </p>
          <div className="">
            <input
              type="email"
              placeholder="Email Address*"
              className="px-3 py-2 w-full bg-transparent border border-gray-500 rounded focus:outline-none focus:border-orange-500 mb-4"
            />
            <button className="bg-red-500 p-2 rounded text-white">
              Subscribe
            </button>
            
          </div>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-white font-semibold mb-3">Help</h3>
          <ul className="space-y-2 text-sm">
            {["FAQs","Track Order","Cancel Order","Return Order","Warranty Info"].map((item, i) => (
              <li key={i} className="hover:text-orange-500 cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-white font-semibold mb-3">Policies</h3>
          <ul className="space-y-2 text-sm">
            {["Return Policy","Security","Sitemap","Privacy Policy","Terms & Conditions"].map((item, i) => (
              <li key={i} className="hover:text-orange-500 cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            {["About Us","Contact Us","Service Centres","Careers","Affiliates"].map((item, i) => (
              <li key={i} className="hover:text-orange-500 cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
        <p className="text-sm">2025 | All Rights Reserved ©.</p>

        <div className="flex gap-6 text-white text-lg  md:mt-0">
          {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) =>
            <Icon key={i} className="hover:text-orange-500 cursor-pointer transition" />
          )}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-1 right-1 border p-2 bg-red-500 rounded-lg shadow-lg hover:scale-110 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
    </>
  );
}
