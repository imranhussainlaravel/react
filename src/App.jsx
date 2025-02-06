import React, { useState, useEffect } from "react";
import PackagingGallery from "./Component/PackagingGallery";
import PackagingFeatures from "./Component/PackagingFeatures";
import ContactForm from "./Component/ContactForm";
import Trusted from "./Component/Trusted";
import ProductSlider from "./Component/ProductSlider";


const App = () => {
  
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      <nav className="sticky  dark:bg-gray-900 top-0 z-50 bg-transparent shadow-md hidden lg:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-blue-600"></div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Project Name
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <a
              href="tel:+1234567890"
              className="text-gray-600 hover:text-blue-600  dark:text-white transition-colors duration-200"
            >
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </nav>
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="flex justify-between items-center px-4 py-3">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-blue-600"></div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Project Name
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
            >
              {darkMode ? "🌞" : "🌙"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navbar - Hidden on mobile */}
      <nav className="hidden lg:block bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 bg-blue-600"></div>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              Project Name
            </span>
          </div>

          <div className="flex items-center space-x-6">
            

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              >
                Contact
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded"
              >
                {darkMode ? "🌞 Light" : "🌙 Dark"}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out bg-white dark:bg-gray-900`}
      >
        <div className="flex flex-col h-full p-4">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-gray-800 dark:text-white p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            <a
              href="#"
              className="text-2xl text-gray-800 dark:text-white hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-2xl text-gray-800 dark:text-white hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#"
              className="text-2xl text-gray-800 dark:text-white hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#"
              className="text-2xl text-gray-800 dark:text-white hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        {/* Hero Section */}
        <section className="bg-white dark:bg-gray-900">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Payments tool for software companies
              </h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                From checkout to global sales tax compliance, companies around
                the world use Flowbite to simplify their payment stack.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Get started
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                Speak to Sales
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
                alt="mockup"
              />
            </div>
          </div>
        </section>
        <PackagingGallery />
        <PackagingFeatures />
        <ContactForm />
        <Trusted />

        <ProductSlider />
      </div>
    </>
  );
};

export default App;