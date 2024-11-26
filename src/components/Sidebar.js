import React, { useState } from 'react';
import '../styles/Sidebar.css';

const Sidebar = ({ onTabChange }) => {
  const [activeItem, setActiveItem] = useState('About');  // Mặc định "About" được chọn

  const handleClick = (item) => {
    setActiveItem(item);  // Cập nhật mục được chọn
    onTabChange(item);  // Gọi hàm onTabChange để cập nhật activeTab trong App.js
  };

  return (
    <div className="sidebar">
      <img src="/avt.jpg" alt="profile" className="profile-pic" />
      <ul className="menu">
        <li className={activeItem === 'About' ? 'active' : ''} onClick={() => handleClick('About')}>About</li>
        <li className={activeItem === 'Skills' ? 'active' : ''} onClick={() => handleClick('Skills')}>Skills</li>
        <li className={activeItem === 'Education' ? 'active' : ''} onClick={() => handleClick('Education')}>Education</li>
        <li className={activeItem === 'Work experience' ? 'active' : ''} onClick={() => handleClick('Work experience')}>Work experience</li>
        <li className={activeItem === 'Certifications' ? 'active' : ''} onClick={() => handleClick('Certifications')}>Certifications</li>
      </ul>
      <button className="hire-me-btn">Hire Me</button>
    </div>
  );
};

export default Sidebar;
