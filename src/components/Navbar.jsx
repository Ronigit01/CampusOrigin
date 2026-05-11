import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    {
      name: "Senior-Junior Connect",
      path: "/seniorjuniorconnect",
    },
    {
      name: "Communities",
      path: "/communities",
    },
    {
      name: "Lost & Found",
      path: "/lostandfound",
    },
    {
      name: "Complaint Box",
      path: "/complaint",
    },
    {
      name: "Result",
      path: "/result",
    },
    {
      name: "About Us",
      path: "/about",
    },
  ];

  return (
    <>
      {/* ------------------ PROFESSIONAL NAVBAR ------------------ */}
      <header className="fixed top-0 left-0 w-full z-50 py-4 md:py-6 backdrop-blur-xl bg-black/30 border-b border-white/5">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
                          <div className="w-32 md:w-44">
                            <img
                              src="/src/assets/logo.png"
                              alt="CampusOrigin Logo"
                              className="w-full h-auto"
                            />
                          </div>
                        </NavLink>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `font-medium transition-all duration-300 hover:scale-105 relative group ${
                      isActive ? "text-white" : "text-gray-300 hover:text-white"
                    }`
                  }
                >
                  {item.name}

                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
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

            {/* Desktop CTA Button */}
            <div className="relative hidden md:inline-flex group">
              <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition duration-300"></div>

              <NavLink
                to="/register"
                className="relative px-2 md:px-8 py-2 md:py-4 rounded-full bg-black text-white font-semibold text-sm md:text-lg transition duration-300 group-hover:scale-105 w-full text-center block"
              >
                🚀 Join Campus
              </NavLink>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 bg-black/90 backdrop-blur-lg border border-white/10 rounded-xl p-4 animate-slideDown">
              <div className="space-y-3">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className="block py-3 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}

                <div className="pt-3 border-t border-white/10">
                  <div className="relative group w-full">
                    <div className="absolute rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition duration-300"></div>

                    <NavLink
                      to="/register"
                      className="relative block w-full py-3 text-center rounded-full bg-black text-white font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Join Campus
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );
}

export default Navbar;
