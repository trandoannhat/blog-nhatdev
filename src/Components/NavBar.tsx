import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react"; // Sử dụng icon cho đẹp hơn

interface NavBarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavBar = ({ darkMode, toggleDarkMode }: NavBarProps) => {
  const [toggle, setToggle] = useState(false);

  // Style NavLink tương thích cả 2 chế độ
  const navStyles = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-purple-600 dark:text-purple-400 font-bold"
      : "hover:text-purple-600 dark:hover:text-purple-400 transition-all text-gray-700 dark:text-gray-300";

  const closeMenu = () => setToggle(false);

  return (
    <header className="sticky top-0 bg-white dark:bg-slate-900 shadow-sm z-50 transition-colors duration-300">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo chữ */}
        <Link
          to="/"
          className="group flex items-center gap-1 text-2xl font-black tracking-tighter"
          onClick={() => {
            window.scrollTo(0, 0);
            closeMenu();
          }}
        >
          <span className="text-purple-600 transition-transform group-hover:-rotate-12 dark:text-purple-400">
            tdn
          </span>
          <span className="bg-purple-600 text-white px-2 py-0.5 rounded-lg shadow-sm">
            blog
          </span>
        </Link>

        {/* Desktop menu & Theme Toggle */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8 font-medium">
            <li>
              <NavLink to="/" className={navStyles} end>
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navStyles}>
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className={navStyles}>
                Kỹ năng
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={navStyles}>
                Dự án
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navStyles}>
                Liên hệ
              </NavLink>
            </li>
          </ul>

          {/* Nút Dark Mode (Desktop & Mobile) */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-xl bg-gray-100 dark:bg-slate-800 text-yellow-500 dark:text-blue-400 hover:scale-110 transition-all shadow-inner"
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile toggle button */}
          <button
            className="md:hidden text-2xl text-gray-700 dark:text-gray-300"
            onClick={() => setToggle((p) => !p)}
          >
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {toggle && (
        <ul className="md:hidden bg-white dark:bg-slate-900 border-t dark:border-slate-800 absolute w-full left-0 shadow-lg z-50 py-2">
          {["Trang chủ", "Giới thiệu", "Kỹ năng", "Dự án", "Liên hệ"].map(
            (item, index) => {
              const paths = ["/", "/about", "/skills", "/projects", "/contact"];
              return (
                <li
                  key={index}
                  className="px-6 py-4 border-b dark:border-slate-800 last:border-none"
                >
                  <NavLink
                    to={paths[index]}
                    className={navStyles}
                    onClick={closeMenu}
                    end={paths[index] === "/"}
                  >
                    {item}
                  </NavLink>
                </li>
              );
            }
          )}
        </ul>
      )}
    </header>
  );
};

export default NavBar;
