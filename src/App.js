import React from "react";
import "./App.css";

function App() {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container">
      {/* Navbar */}
      <header className="navbar">
        <a href="/" className="logo">
          <img src="/ezliftlogo.svg" alt="EZLift Logo" className="logo-img" />
        </a>
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
            </li>
            <li>
              <a href="#team" onClick={(e) => handleScroll(e, 'team')}>Meet the Team</a>
            </li>
            <li>
              <a href="#updates" onClick={(e) => handleScroll(e, 'updates')}>Update Log</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h2>Tell it. To do it.</h2>
        <p>Experience the future of task management with EZLift.</p>
        <a href="#contact" className="cta-button" onClick={(e) => handleScroll(e, 'contact')}>Get Started</a>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h3>About EZLift</h3>
        <p>EZLift is a cutting-edge platform designed to streamline your tasks through intuitive voice commands. Simplify your workflow and boost productivity with our innovative solutions.</p>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="team">
        <h3>Meet the Team</h3>
        <div className="team-grid">
          {/* Example Team Member */}
          <div className="team-member">
            <img src="/ac_ezl.png" alt="Alan Chen" className="team-photo" />
            <h4>Alan Chen</h4>
            <p style={{ color: '#FF914D' }}><b>ML, Software</b></p>
            <p>Alan brings skills in Computer Vision, powering the complex visual decision-making algorithm that Labot uses.</p>
          </div>
          <div className="team-member">
            <img src="/ec_ezl.png" alt="Elvis Cheung" className="team-photo" />
            <h4>Elvis Cheung</h4>
            <p style={{ color: '#FF914D' }}><b>Mechanical</b></p>
            <p>Elvis gives Labot the muscles required to achieve its tasks by designing the mechanical components needed.</p>
          </div>
          <div className="team-member">
            <img src="/jg_ezl.png" alt="Jagroop Gill" className="team-photo" />
            <h4>Jagroop Gill</h4>
            <p style={{ color: '#FF914D' }}><b>Mechanical, Project Management</b></p>
            <p>Jagroop provides Labot with the necessary appendages while keeping the team on track to achieve their goals.</p>
          </div>
          <div className="team-member">
            <img src="/vp_ezl.png" alt="Vraj Patel" className="team-photo" />
            <h4>Vraj Patel</h4>
            <p style={{ color: '#FF914D' }}><b>Software, Hardware</b></p>
            <p>Vraj works on ensuring Labot has the required sensors and hardware, while integrating everything with code.</p>
          </div>
          {/* Add more team members as needed */}
        </div>
      </section>

      {/* Update Log Section */}
      <section id="updates" className="updates">
        <h3>Update Log</h3>
        <div className="update-entry">
          <h4>Date</h4>
          <ul>
            <li>Key Point 1: Details about the update.</li>
            <li>Key Point 2: Additional information.</li>
            {/* Add more points as needed */}
          </ul>
        </div>
        {/* Add more update entries as needed */}
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2025 EZLift. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
