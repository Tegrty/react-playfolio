import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav className="flex flex-wrap items-center justify-between px-4 py-3 bg-white sm:bg-transparent">
      <div className="flex items-center flex-shrink-0 mr-6">
        <span className="text-lg font-semibold tracking-tight text-gray-800">My Site</span>
      </div>
      <div className="block sm:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-700 border-gray-700 hover:text-white hover:border-white">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 7h20v2H0v-2zm0 7h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="hidden sm:block">
        <ul className="flex flex-wrap items-center">
          <li className="mx-2">
            <a
              href="#home"
              onClick={() => handlePageChange('Home')}
              className={`${
                currentPage === 'Home' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
              } px-3 py-2 rounded`}
            >
              Home
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#about"
              onClick={() => handlePageChange('About')}
              className={`${
                currentPage === 'About' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
              } px-3 py-2 rounded`}
            >
              About
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#blog"
              onClick={() => handlePageChange('Blog')}
              className={`${
                currentPage === 'Blog' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
              } px-3 py-2 rounded`}
            >
              Blog
            </a>
          </li>
          <li className="mx-2">
            <a
              href="#contact"
              onClick={() => handlePageChange('Contact')}
              className={`${
                currentPage === 'Contact' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
              } px-3 py-2 rounded`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
