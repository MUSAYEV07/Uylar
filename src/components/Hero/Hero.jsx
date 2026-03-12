import React, { useEffect, useState } from 'react';
import { properties } from './properties';
import './Hero.css';

function Hero() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await properties();
        setData(res);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
   <section className='hero'>
       <div className="hero-container">
      <h1>Properties</h1>
      <div className="properties-grid">
        {properties.map((item) => (
          <div key={item.id} className="property-card">
            <img src={item.image} alt={item.imageAlt} />
            <h2>{item.title}</h2>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Price:</strong> ${item.price}</p>
          </div>
        ))}
      </div>
    </div>
   </section>
  );
}

export default Hero;