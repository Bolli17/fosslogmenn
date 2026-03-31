import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLang } from "../context/LanguageContext";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const { lang, toggleLang } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#sersvid", label: lang === "is" ? "Sérsviðu" : "Services" },
    {
      href: "#starfsfolk",
      label: lang === "is" ? "Starfsfólk" : "Staff",
    },
    {
      href: "#contact",
      label: lang === "is" ? "Hafa samband" : "Contact",
    },
  ];

  const handleNavClick = (href) => {
    setOpen(false);
    if (!isHome) {
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`navbar ${scrolled || !isHome ? "navbar-solid" : ""}`}>
      <div className="navbar-inner">
        <Link
          to="/"
          className="navbar-brand"
          onClick={() => setOpen(false)}
        >
          <img
            src="/images/logo.png"
            alt="Foss"
            className="navbar-logo-img"
          />
          <div className="navbar-brand-text" />
        </Link>

        <div className={`navbar-links ${open ? "open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
          <button className="navbar-link lang-btn" onClick={() => { toggleLang(); setOpen(false); }}>
            {lang === "is" ? "English" : "Íslenska"}
          </button>
        </div>

        <button className="navbar-burger" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
