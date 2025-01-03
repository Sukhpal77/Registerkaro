import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-gray-600 body-font bg-white shadow-md">
      {/* Top Blue Bar */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="mailto:www.registerkaro.in" className="hover:text-gray-300">
            📧 www.registerkaro.in
          </a>
          <a href="tel:+918447746183" className="hover:text-gray-300">
            📞 +918447746183
          </a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300"><img src="/icons/facebook.png" alt="Facebook" className="h-4" /></a>
          <a href="#" className="hover:text-gray-300"><img src="/icons/insta.png" alt="Instagram" className="h-4" /></a>
          <a href="#" className="hover:text-gray-300"><img src="/icons/twiter.png" alt="Twitter" className="h-4" /></a>
          <a href="#" className="hover:text-gray-300"><img src="/icons/pintrest.png" alt="Pintrest" className="h-4" /></a>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative">
            <img src="/img/logo.png" alt="Logo" className="h-10" />
            <img
              src="/img/christmas-hat.png"
              alt="Hat"
              className="h-13 absolute top-[-17px] left-[-23px]"
            />
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Menu */}
        <nav
          className={`hidden md:flex items-center space-x-6 text-sm`}
        >
          <Link href="/home">Home</Link>
          <div className="relative group">
            <Link href="/services" className="flex items-center">
              Our Services
              <span className="ml-1">▼</span>
            </Link>
          </div>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/about">About Us</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-blue-500">
            <img src="/icons/search.png" alt="Search" className="h-4" />
          </button>
          <button className="bg-orange-500 text-white py-2 px-4 rounded-md text-sm">
            Talk An Expert
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link href="/home" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)}>Our Services</Link>
            </li>
            <li>
              <Link href="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            </li>
            <li>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-md text-sm w-full">
                Talk An Expert
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
