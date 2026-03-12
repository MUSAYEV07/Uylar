import React, { useState } from "react";
import { FiBell, FiUserPlus, FiMenu, FiX } from "react-icons/fi";
import RegisterModal from "./RegisterModal";
import "./Header.css";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <>
      <section className="header">
        <div className="container">
          <div className="header-container">
            <h1>Uylar</h1>

            <div className={`header-right ${menuOpen ? "active" : ""}`}>
              <form>
                <select id="language" name="language">
                  <option value="en">English</option>
                  <option value="ru">Русский</option>
                  <option value="uz">O'zbek</option>
                </select>
              </form>

              <div className="header-icons">
                <button className="dark-btn" onClick={toggleDarkMode}>
                  {darkMode ? "☀️" : "🌙"}
                </button>

                <div className="bell">
                  <FiBell />
                </div>

                <button
                  className="register-btn"
                  onClick={() => setModalOpen(true)}
                >
                  <FiUserPlus />
                </button>
              </div>
            </div>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FiX /> : <FiMenu />}
            </div>
          </div>
        </div>
      </section>

      <RegisterModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default Header;