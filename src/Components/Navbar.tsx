"use client";

import Link from 'next/link';  
import { useState } from 'react';  

export default function Navbar() {  
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);  
  
  const toggleMobileMenu = () => {  
    setMobileMenuOpen(!isMobileMenuOpen);  
  };  

  return (  
    <nav className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">  
      <div className="max-w-5xl mx-auto px-4">  
        <div className="flex items-center justify-between h-16">  
          <h1 className="text-2xl tracking-wider bg-gradient-to-r from-purple-700 via-pink-500 to-red-500 bg-clip-text text-transparent font-semibold cursor-pointer">Noor's Web</h1>  
          <div className="hidden md:flex space-x-4 text-gray-900">  
            <Link href="/" className="text-lg hover:text-purple-600 transition duration-300">Home</Link>  
            <Link href="/About" className="text-lg hover:text-purple-600 transition duration-300">About</Link>  
            <Link href="/Services" className="text-lg hover:text-purple-600 transition duration-300">Services</Link>  
            <Link href="/Contact" className="text-lg hover:text-purple-600 transition duration-300">Contact</Link>  
            <Link href="/blog" className="text-lg hover:text-purple-600 transition duration-300">Blog</Link>  
          </div>  
          {/* Mobile Menu Button */}  
          <div className="md:hidden">  
            <button onClick={toggleMobileMenu} className="focus:outline-none">  
              {isMobileMenuOpen ? (  
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>  
                </svg>  
              ) : (  
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">  
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>  
                </svg>  
              )}  
            </button>  
          </div>  
        </div>  
      </div>  
      {/* Mobile Menu */}  
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white`}>  
        <nav className="flex flex-col space-y-2 px-4 py-2">  
          <Link href="/" className="text-gray-900 hover:text-purple-600 transition duration-300">Home</Link>  
          <Link href="/About" className="text-gray-900 hover:text-purple-600 transition duration-300">About</Link>  
          <Link href="/Services" className="text-gray-900 hover:text-purple-600 transition duration-300">Services</Link>  
          <Link href="/Contact" className="text-gray-900 hover:text-purple-600 transition duration-300">Contact</Link>  
          <Link href="/blog" className="text-gray-900 hover:text-purple-600 transition duration-300">Blog</Link>  
        </nav>  
      </div>  
    </nav>  
  );  
}