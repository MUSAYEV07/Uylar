import React, { useState } from 'react';
import { properties } from './properties';
import Header from '../Header/Header';
import './Hero.css';

function Hero() {
  const [filtered, setFiltered] = useState(properties);

  // Qidiruv funksiyasi
  const handleSearch = (query) => {
    const result = properties.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.location.toLowerCase().includes(query.toLowerCase()) ||
      item.type.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(result);
  };

  return (
    <>
      {/* Header ga onSearch propni beramiz */}
      <Header onSearch={handleSearch} />

      <section className='hero'>
        <div className="hero-container">
          <h1>Tanlangan uy-joylar</h1>

          <div className="properties-grid">
            {filtered.length === 0 ? (
              <p>Hech qanday uy topilmadi.</p>
            ) : (
              filtered.map((item) => (
                <div key={item.id} className="property-card">
                  <img src={item.image} alt={item.imageAlt} />
                  <h2>{item.title}</h2>
                  <p><strong>Joylashuv:</strong> {item.location}</p>
                  <p><strong>Tip:</strong> {item.type}</p>
                  <p><strong>Xonalar:</strong> {item.rooms}</p>
                  <p><strong>Maydon:</strong> {item.area} m²</p>
                  <p><strong>Narx:</strong> ${item.price.toLocaleString()}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;