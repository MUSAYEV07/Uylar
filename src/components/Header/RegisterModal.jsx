import React, { useState } from "react";
import "./RegisterModal.css";

function RegisterModal({ isOpen, onClose }) {
    

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>Ro'yxatdan o'tish</h2>

        <form>
          <input type="text" placeholder="Ism" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Parol" required />

          <button type="submit">Register</button>
        </form>

        <button className="close-btn" onClick={onClose}>
          ❌
        </button>
      </div>
    </div>
  );
}

export default RegisterModal;