import { useState, useContext } from "react";
import { CartContext } from "../../../src/context/CartContext";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import Logo from "../icons/Logo";
// 🔑 IMPORT: Bring in the useAuth hook
import { useAuth } from "../../../src/context/AuthContext"; 

// --- Reusable Menu Link Component ---
const MenuLink = ({
  filterKey,
  filterValue,
  children,
  className = "",
  onClick,
}) => {
  return (
    <Link
      to={`/products?${filterKey}=${encodeURIComponent(filterValue)}`}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

// --- Standard Nav Link Component for static routes ---
const NavLink = ({ to, children, className = "", onClick }) => {
  return (
    <Link to={to} className={className} onClick={onClick}>
      {children}
    </Link>
  );
};

export default function EcommerceHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useContext(CartContext);
  // 🔑 CONTEXT: Access authentication state and functions
  const { isAuthenticated, logout } = useAuth(); 

  // Helper function to close the mobile menu after navigation
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // 🔑 NEW HANDLER: Logout logic
  const handleLogout = () => {
    logout(); // Clear token and user data from context and storage
    setMobileMenuOpen(false); // Close mobile menu if open
    // Note: You can optionally add a navigation redirect here if needed, 
    // e.g., navigate('/'), but the main effect is updating the UI.
  };

  const TopBannerLinks = () => (
    <div className="text-[14px] font-medium">
      {isAuthenticated ? (
        // 🔑 AUTHENTICATED LINKS: MY ACCOUNT / LOGOUT
        <>
          <Link to="/my-account" className="cursor-pointer hover:underline">
            MY ACCOUNT
          </Link>
          <span> / </span>
          <button 
            onClick={handleLogout} 
            className="cursor-pointer hover:underline bg-transparent border-none text-white p-0 m-0"
          >
            LOGOUT
          </button>
        </>
      ) : (
        // DEFAULT LINKS: LOG IN / SIGNUP
        <>
          <Link to="/login" className="cursor-pointer hover:underline">
            LOG IN
          </Link>
          <span> / </span>
          <Link to="/signup" className="cursor-pointer hover:underline">
            SIGNUP
          </Link>
        </>
      )}
    </div>
  );

  return (
    <div className="w-full sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-black text-white text-center py-2 text-sm flex justify-around items-center h-[38px]">
        <div>Free Shipping Sitewide on Every Order, Don't Miss Out!!</div>
        {/* 🔑 RENDERING THE CONDITIONAL LINKS */}
        <TopBannerLinks /> 
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="shrink-0">
              <h1 className="text-2xl font-bold tracking-tight">
                <Link to="/">
                  <Logo />
                </Link>
              </h1>
            </div>

            {/* Desktop Navigation (omitted for brevity, assume links are fine) */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* TOPWEAR with dropdown */}
              <div className="relative group">
                <MenuLink
                  filterKey="category"
                  filterValue="Topwear"
                  className="flex items-center space-x-1 text-black-700 hover:text-gray-900 transition-colors"
                >
                  <span className="text-[14px] font-semibold">TOPWEAR</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </MenuLink>

                {/* Dropdown Menu (Mega Menu) */}
                <div className="absolute left-0 top-full mt-2 w-[700px] bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-200 ">
                  <div className="grid grid-cols-4 gap-0 p-4">
                    {/* T-shirts Column - ALREADY USING MenuLink */}
                    <div>
                      <MenuLink
                        filterKey="subCategory"
                        filterValue="T-shirts"
                        className="font-bold text-gray-900 mb-3 text-sm block"
                      >
                        T-shirts
                      </MenuLink>
                      <ul className="space-y-2">
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Plain T-shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Plain T-shirts
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Printed T-shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Printed T-shirts
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Regular Fit T-shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Regular Fit T-shirts
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Oversized T-shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Oversized T-shirts
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Polo T-shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Polo T-shirts
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Plus Size T-shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Plus Size T-shirts
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Full Sleeve T-shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Full Sleeve T-shirts
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="subCategory"
                            filterValue="T-shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-semibold"
                          >
                            View All
                          </MenuLink>
                        </li>
                      </ul>
                    </div>

                    {/* Shirts Column */}
                    <div>
                      <MenuLink
                        filterKey="subCategory"
                        filterValue="Shirts"
                        className="font-bold text-gray-900 mb-3 text-sm block"
                      >
                        Shirts
                      </MenuLink>
                      <ul className="space-y-2">
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Plain Shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Plain Shirts
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Shackets"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Shackets
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Oxford Shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Oxford Shirts
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Flannel Shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Flannel Shirts
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Satin Shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Satin Shirts
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Festive Shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Festive Shirts
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Cotton Shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Cotton Shirts
                          </MenuLink>
                        </li>

                        <li>
                          <MenuLink
                            filterKey="subCategory"
                            filterValue="Shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-semibold"
                          >
                            View All
                          </MenuLink>
                        </li>
                      </ul>
                    </div>

                    {/* Polos Column */}
                    <div>
                      <MenuLink
                        filterKey="subCategory"
                        filterValue="Polos"
                        className="font-bold text-gray-900 mb-3 text-sm block"
                      >
                        Polos
                      </MenuLink>
                      <ul className="space-y-2">
                        <li>
                          <MenuLink
                            filterKey="specificType"
                            filterValue="Polo T-shirts"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-semibold"
                          >
                            View All
                          </MenuLink>
                        </li>
                      </ul>
                    </div>

                    {/* Shop For Women Column */}
                    <div>
                      <MenuLink
                        filterKey="gender"
                        filterValue="Women"
                        className="font-bold text-gray-900 mb-3 text-sm block"
                      >
                        Shop For Women
                      </MenuLink>
                      <ul className="space-y-2">
                        <li>
                          <MenuLink
                            filterKey="subCategory"
                            filterValue="Women-Topwear"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Topwear
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="subCategory"
                            filterValue="Women-Bottomwear"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            Bottomwear
                          </MenuLink>
                        </li>
                        <li>
                          <MenuLink
                            filterKey="category"
                            filterValue="women"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors font-semibold"
                          >
                            View All
                          </MenuLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* The rest of the main navigation links... */}
              <MenuLink
                filterKey="category"
                filterValue="Bottomwear"
                className="flex items-center space-x-1 text-black-700 hover:text-gray-900 transition-colors"
              >
                <span className="text-[14px] font-semibold">BOTTOMWEAR</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </MenuLink>
              <MenuLink
                filterKey="category"
                filterValue="Combos"
                className="text-black-700 text-[14px] font-semibold"
              >
                COMBOS
              </MenuLink>
              <MenuLink
                filterKey="category"
                filterValue="New Arrivals"
                className="text-black-700 text-[14px] font-semibold"
              >
                NEW ARRIVALS
              </MenuLink>
              <MenuLink
                filterKey="category"
                filterValue="Winterwear"
                className="text-black-700 text-[14px] font-semibold"
              >
                WINTERWEAR
              </MenuLink>
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Icon */}
              <Link
                to="/search"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </Link>

              {/* Cart Icon with Badge */}
              <Link to="/cart">
                <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ShoppingCart className="w-5 h-5 text-gray-700" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems.length}
                    </span>
                  )}
                </button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-4 py-4 space-y-3">
              {/* MOBILE NAVIGATION LINKS (using MenuLink/handleLinkClick) */}
              <MenuLink
                filterKey="category"
                filterValue="Topwear"
                onClick={handleLinkClick}
                className="block py-2 text-gray-900 hover:text-gray-900 font-bold"
              >
                TOPWEAR
              </MenuLink>
              <MenuLink
                filterKey="category"
                filterValue="Bottomwear"
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                BOTTOMWEAR
              </MenuLink>
              <MenuLink
                filterKey="category"
                filterValue="Combos"
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                COMBOS
              </MenuLink>
              <MenuLink
                filterKey="category"
                filterValue="New Arrivals"
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                NEW ARRIVALS
              </MenuLink>
              <MenuLink
                filterKey="category"
                filterValue="Winterwear"
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-gray-900 font-medium"
              >
                WINTERWEAR
              </MenuLink>
              
              <div className="pt-3 border-t border-gray-200">
                {/* 🔑 CONDITIONAL MOBILE AUTH LINKS */}
                {isAuthenticated ? (
                    <>
                        <NavLink
                            to="/my-account"
                            onClick={handleLinkClick}
                            className="block py-2 text-sm text-gray-700 hover:text-gray-900"
                        >
                            MY ACCOUNT
                        </NavLink>
                        <button
                            onClick={handleLogout}
                            className="block w-full text-left py-2 text-sm text-gray-700 hover:text-gray-900 bg-transparent border-none"
                        >
                            LOGOUT
                        </button>
                    </>
                ) : (
                    <NavLink
                        to="/login"
                        onClick={handleLinkClick}
                        className="block py-2 text-sm text-gray-700 hover:text-gray-900"
                    >
                        LOG IN / SIGNUP
                    </NavLink>
                )}
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}