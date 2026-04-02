import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["Home", "Features", "Pricing", "Contact"];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100"
      style={{ boxShadow: "0 2px 20px rgba(74,144,226,0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "#4A90E2" }}
            >
              <Zap size={16} color="white" fill="white" />
            </div>
            <span
              className="text-xl"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#1a1a2e" }}
            >
              SmartBin <span style={{ color: "#4A90E2" }}>AI</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-gray-600 hover:text-[#4A90E2] transition-colors duration-200 cursor-pointer"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.9rem" }}
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollTo("Contact")}
              className="px-5 py-2 rounded-full text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg cursor-pointer"
              style={{
                backgroundColor: "#4A90E2",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                boxShadow: "0 4px 15px rgba(74,144,226,0.35)",
              }}
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-[#4A90E2] cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-gray-600 hover:text-[#4A90E2] py-2 transition-colors cursor-pointer"
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500 }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo("Contact")}
            className="mt-2 px-5 py-2 rounded-full text-white text-center cursor-pointer"
            style={{ backgroundColor: "#4A90E2", fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}
