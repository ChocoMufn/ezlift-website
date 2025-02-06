import React from "react";
import "./App.css";
import UpdateLog from "./UpdateLog";
import { useEffect } from "react";

function App() {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  useEffect(() => {
    const video = document.querySelector(".hero-video");
    if (video) {
      video.play().catch((error) => console.log("Autoplay prevented:", error));
    }
  }, []);
  
  return (
    <div className="container">
      <header className="navbar">
        <a href="/" className="logo">
          <img src="/ezliftlogo.svg" alt="EZLift Logo" className="logo-img" />
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
            <li><a href="#team" onClick={(e) => handleScroll(e, 'team')}>Meet the Team</a></li>
            <li><a href="#updates" onClick={(e) => handleScroll(e, 'updates')}>Update Log</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        {/* Background Video */}
        <video className="hero-video" autoPlay loop muted playsInline preload="auto">
          <source src="ezlift_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        {/* Content Overlay */}
        <div className="hero-content">
          <h2>Tell it. To do it.</h2>
          <p>Experience the future of warehouses with EZLift.</p>
          <a href="#contact" className="cta-button" onClick={(e) => handleScroll(e, 'about')}>Learn More</a>
        </div>
      </section>


      <section id="about" className="about">
  <h3>About EZLift</h3>

  {/* Card Container */}
  <div className="about-cards">
    <div className="card">
      <h4>Problem</h4>
      <p>Warehouses are the backbone of global logistics, yet they remain one of the most 
        hazardous work environments. Traditional forklifts, while essential for moving 
        heavy goods, contribute to a significant number of workplace injuries and operational 
        inefficiencies. Human error, fatigue, and congested warehouse layouts make maneuvering 
        forklifts a challenge, leading to costly delays and accidents. As demand for faster and 
        safer logistics grows, businesses are seeking smarter solutions to optimize warehouse 
        operations while reducing risks to human workers.</p>
    </div>

    <div className="card">
      <h4>Labot</h4>
      <p>At EZLift, we’ve developed the Labot, a voice-operated forklift designed to eliminate 
      many of these challenges. By removing the need for direct manual control, Labot enhances 
      efficiency while reducing workplace hazards. Operators can guide it with simple voice 
      commands, allowing for smoother workflows and safer material handling. With Labot, 
      warehouses can maintain high productivity levels without compromising worker safety, setting
      a new standard for operational reliability in the logistics industry.</p>
    </div>

    <div className="card">
      <h4>Vision</h4>
      <p>Looking ahead, EZLift envisions a future where warehouse automation works in harmony with 
      human workers, creating environments that are not only more efficient but also significantly 
      safer. We aim to expand the capabilities of Labot to integrate seamlessly with other smart 
      warehouse systems, ensuring a fully optimized supply chain. As technology evolves, our 
      mission remains clear: to revolutionize material handling while prioritizing worker 
      well-being, shaping the next generation of logistics innovation.</p>
    </div>
  </div>

  {/* Image Container */}
  <div className="about-images">
    <img src="/ezlift_bot1.png" alt="EZLift Bot 1" width="600px" className="ezlift-bot" />
    <img src="/ezlift_bot2.png" alt="EZLift Bot 2" width="600px" className="ezlift-bot" />
  </div>
</section>


<section id="team" className="team">
  <h3>Meet the Team</h3>
  <div className="team-grid">
    <a href="https://www.linkedin.com/in/chenalan02/" target="_blank" rel="noopener noreferrer" className="team-member-link">
      <div className="team-member" style={{ backgroundColor: "black", color: "white" }}>
        <img src="/ac_ezl.png" alt="Alan Chen" className="team-photo" />
        <h4>Alan Chen</h4>
        <p style={{ color: '#FF914D' }}><b>ML, Software</b></p>
        <p>Alan brings skills in Computer Vision, powering the complex visual decision-making algorithm that Labot uses.</p>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/elvis-cheung/" target="_blank" rel="noopener noreferrer" className="team-member-link">
      <div className="team-member" style={{ backgroundColor: "black", color: "white" }}>
        <img src="/ec_ezl.png" alt="Elvis Cheung" className="team-photo" />
        <h4>Elvis Cheung</h4>
        <p style={{ color: '#FF914D' }}><b>Mechanical</b></p>
        <p>Elvis gives Labot the muscles required to achieve its tasks by designing the mechanical components needed.</p>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/jagroop-gill/" target="_blank" rel="noopener noreferrer" className="team-member-link">
      <div className="team-member" style={{ backgroundColor: "black", color: "white" }}>
        <img src="/jg_ezl.png" alt="Jagroop Gill" className="team-photo" />
        <h4>Jagroop Gill</h4>
        <p style={{ color: '#FF914D' }}><b>Mechanical, Project Management</b></p>
        <p>Jagroop provides Labot with the necessary appendages while keeping the team on track to achieve their goals.</p>
      </div>
    </a>
    <a href="https://www.linkedin.com/in/therealvrajpatel/" target="_blank" rel="noopener noreferrer" className="team-member-link">
      <div className="team-member" style={{ backgroundColor: "black", color: "white" }}>
        <img src="/vp_ezl.png" alt="Vraj Patel" className="team-photo" />
        <h4>Vraj Patel</h4>
        <p style={{ color: '#FF914D' }}><b>Software, Hardware</b></p>
        <p>Vraj works on ensuring Labot has the required sensors and hardware, while integrating everything with code.</p>
      </div>
    </a>
  </div>
</section>


      <UpdateLog />

      <footer className="footer">
        2025 EZLift
      </footer>
    </div>
  );
}

export default App;
