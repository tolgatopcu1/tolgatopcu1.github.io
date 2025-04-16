import { useState } from "react";
import { Menu, X } from "lucide-react";
import trFlag from '/assets/tr-flag.png';
import enFlag from '/assets/en-flag.png';

export default function Navbar({ language, setLanguage }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "tr" ? "en" : "tr"));
  };

  const navLinks = [
    { label: language === "tr" ? "Anasayfa" : "Home", href: "#hero" },
    { label: language === "tr" ? "Hakkımda" : "About", href: "#about" },
    { label: language === "tr" ? "Projeler" : "Projects", href: "#projects" },
    { label: language === "tr" ? "İletişim" : "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-dark shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <a
        href="#hero"
        className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent tracking-wide hover:opacity-80 transition-opacity"
      >
        Tolga
      </a>


        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-sm font-medium text-gray-200 hover:text-purpleAccent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Language toggle (desktop & mobile) */}
        <button
  onClick={toggleLanguage}
  className="text-sm ml-4 border border-purpleAccent text-purpleAccent px-3 py-1 rounded flex items-center gap-2 hover:bg-purpleAccent hover:text-dark transition-colors"
>
  <img
    src={language === "tr" ? enFlag : trFlag}
    alt="flag"
    className="w-5 h-4 object-cover rounded-sm"
  />
  {language === "tr" ? "EN" : "TR"}
</button>


        {/* Mobile menu toggle */}
        <div className="md:hidden ml-4">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-200">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark px-4 pb-4">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="block py-2 text-gray-200 hover:text-purpleAccent"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
