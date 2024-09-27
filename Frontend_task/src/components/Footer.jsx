import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-amber-100 shadow-inner mt-10">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
       
          <div className="flex space-x-6">
            <Link
              to="/dashboard"
              className="text-green-600 hover:text-green-800 transition duration-300"
            >
              Dashboard
            </Link>
            <Link
              to="/statistics"
              className="text-green-600 hover:text-green-800 transition duration-300"
            >
              Statistics
            </Link>
            <Link
              to="/barchart"
              className="text-green-600 hover:text-green-800 transition duration-300"
            >
              Barchart
            </Link>
          </div>

          
          <div className="text-green-600">
            <p>© {new Date().getFullYear()} Transition Details. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

