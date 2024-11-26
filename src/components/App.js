import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import 'aos/dist/aos.css'; // Import CSS
import AOS from 'aos'; // Import thư viện AOS
import Sidebar from './Sidebar';
import About from './About';
import Skills from './Skills';
import Education from './Education';  // Thêm component Education
import WorkExperience from './WorkExperience';  // Thêm component WorkExperience
import Certifications from './Certifications';  // Thêm component Certifications

function App() {
  const [activeTab, setActiveTab] = useState('About');  // Lưu trữ tab đang chọn

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  // Hàm để thay đổi tab khi click vào mục trong sidebar
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app">
      <Sidebar onTabChange={handleTabChange} />  
      <div className="content">
        {activeTab === 'About' && <About />}  
        {activeTab === 'Skills' && <Skills />}  
        {activeTab === 'Education' && <Education />} 
        {activeTab === 'Work experience' && <WorkExperience />}  
        {activeTab === 'Certifications' && <Certifications />} 
      </div>
    </div>
  );
}

export default App;
