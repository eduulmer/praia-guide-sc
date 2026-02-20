import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
{ to: "/", key: "home" },
{ to: "/regras", key: "rules" },
{ to: "/praias", key: "beaches" },
{ to: "/restaurantes", key: "restaurants" },
{ to: "/passeios", key: "tours" },
{ to: "/Hospedagem", key: "accommodation" }] as
const;

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 bg-card/190 backdrop-blur-md border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 text-xl font-bold text-primary font-sans border-0 text-right px-0 py-0 my-0 mx-0">
          <img src={logo} alt="Feito Maré" className="h-20 w-20 object-fill rounded-full" />
          Feito Maré
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
          <Link
            key={item.to}
            to={item.to}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            location.pathname === item.to ?
            "bg-primary text-primary-foreground" :
            "text-foreground/70 hover:text-foreground hover:bg-muted"}`
            }>

              {t(`nav.${item.key}`)}
            </Link>
          )}
          <LanguageSwitcher />
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-1">
          <LanguageSwitcher />
          <button
            className="p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu">

            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open &&
      <nav className="md:hidden border-t border-border bg-card pb-4">
          {navItems.map((item) =>
        <Link
          key={item.to}
          to={item.to}
          onClick={() => setOpen(false)}
          className={`block px-6 py-3 text-sm font-medium transition-colors ${
          location.pathname === item.to ?
          "bg-primary/10 text-primary" :
          "text-foreground/70 hover:bg-muted"}`
          }>

              {t(`nav.${item.key}`)}
            </Link>
        )}
        </nav>
      }
    </header>);

};

export default Header;