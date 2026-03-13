import React from "react";
import './Footer.css'
import { FaInstagram, FaTelegramPlane, FaFacebookF, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          <div className="footer-about">
            <h2>Uylar</h2>
            <p>
              Your trusted real estate classifieds platform.
              <br />
              Find your dream home today.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#">About</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>

            <a href="tel:+998901234567">
              +998 90 123 45 67
            </a>

            <a href="mailto:info@uylar.uz">
              info@uylar.uz
            </a>

            <div className="footer-social">

              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>

              <a href="https://t.me" target="_blank" rel="noreferrer">
                <FaTelegramPlane />
              </a>

              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>

              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>

            </div>
          </div>

        </div>

        <p className="footer-copy">
          © 2024 Uylar. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;