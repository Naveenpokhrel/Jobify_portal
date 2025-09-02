import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-gray-300 mt-20">
      <div className="container px-4 2xl:px-20 mx-auto flex flex-col md:flex-row items-center justify-between gap-6 py-6">
        
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="w-32 md:w-40" />

        {/* Copyright */}
        <p className="text-sm md:text-base text-center md:text-left">
          © {new Date().getFullYear()} InsiderJobs | All rights reserved.
        </p>

        {/* Social Media */}
        <div className="flex gap-4">
          <a href="#">
            <img 
              width={34} 
              src={assets.twitter_icon} 
              alt="Twitter" 
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a href="#">
            <img 
              width={34} 
              src={assets.facebook_icon} 
              alt="Facebook" 
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
          <a href="#">
            <img 
              width={34} 
              src={assets.instagram_icon} 
              alt="Instagram" 
              className="hover:scale-110 transition-transform duration-200"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
