import { useState, useEffect, useRef } from "react";
import SubMenuNavbar from "./subMenuNavbar";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/">
                <span className="text-white font-bold text-lg">Logo</span>
              </NavLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  to="/productos"
                >
                  Productos
                </NavLink>
                <div className="relative inline-block text-left" ref={menuRef}>
                  <button
                    onClick={toggleMenu}
                    type="button"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                    id="menu-button"
                    aria-expanded="true"
                    aria-haspopup="true"
                  >
                    Pedidos
                  </button>
                  {isMenuOpen && (
                    <div
                      className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="menu-button"
                      tabIndex={-1}
                    >
                      <div className="py-1" role="none">
                        <NavLink
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                          role="menuitem"
                          tabIndex={-1}
                          to="/nuevo-pedido"
                        >
                          Realizar Pedido
                        </NavLink>
                        <NavLink
                          className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                          role="menuitem"
                          tabIndex={-1}
                          to="pedidos"
                        >
                          Visualizar Pedidos
                        </NavLink>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <NavLink
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                to="/registro"
              >
                Registrarse
              </NavLink>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && <SubMenuNavbar />}
      </div>
    </nav>
  );
}
