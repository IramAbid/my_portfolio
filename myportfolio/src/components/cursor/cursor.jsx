// CursorBall.js
import React, { useState, useEffect } from 'react';
import './cursor.css'; // CSS file for styling

const CursorBall = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMousePosition);

    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div className="container">
      <div className="ball" style={{ left: position.x, top: position.y }}></div>
    </div>
  );
};

export default CursorBall;
