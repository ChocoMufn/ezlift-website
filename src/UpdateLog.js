import React, { useState } from 'react';
import './App.css';

const updateLog = [
  { 
    date: '2025-02-01', 
    keyPoints: 'Team Picture', 
    details: 'Took the team picture in SSDC.',
    images: ['teampic.jpg']
  },
  { 
    date: '2025-02-01', 
    keyPoints: 'Construction Begins', 
    details: 'Started assembling the EZLift Labot, integrating mechanical, electrical, and control components according to the finalized design.',
    images: ['update0.jpg', 'update1.jpg', 'update2.jpg']
  },
  { date: '2025-01-25', keyPoints: 'Planning Meeting', details: 'Held a planning meeting to finalize the construction workflow, assign tasks, and set deadlines for different phases of the build process.' },
  { date: '2025-01-16', keyPoints: 'Parts Arrival & Advisor Briefing', details: 'Received all ordered parts and components. Met with the project advisor to update them on progress and discuss potential construction challenges.' },
  { date: '2025-01-01', keyPoints: 'Term Start Meeting & Parts Finalization', details: 'Kicked off the new term with a meeting to review progress, finalize the parts list, and ensure all necessary components were ordered.' },
  { date: '2024-12-02', keyPoints: 'Final Report and Web Update', details: 'Submitted the final design report, updated the team webpage with detailed documentation and a project summary.' },
  { date: '2024-11-25', keyPoints: 'Final Design Presentation', details: 'Presented the finalized EZLift Labot design, demonstrating its capabilities and compliance with the initial constraints and criteria.' },
  { date: '2024-11-11', keyPoints: 'Design Verification', details: 'Validated the design through simulations and preliminary testing of the motor and lift system performance.' },
  { date: '2024-11-04', keyPoints: 'Detailed Design Completion', details: 'Completed the detailed design, including CAD models and mechanical, electrical, and control system schematics.' },
  { date: '2024-10-21', keyPoints: 'Preliminary Design Presentation', details: 'Delivered the PDP, showcasing the high-level design approach, key components, and anticipated challenges.' },
  { date: '2024-10-07', keyPoints: 'Solution Selection', details: 'Selected the best solution for the EZLift Labot based on design constraints and feasibility analysis.' },
  { date: '2024-09-30', keyPoints: 'Solution Exploration', details: 'Presented four potential solutions and conducted a review of three related patents for insights into design approaches.' },
  { date: '2024-09-23', keyPoints: 'Problem Finalization', details: 'Finalized the problem statement and began discussing constraints and criteria for the design.' },
  { date: '2024-09-19', keyPoints: 'Website Launch', details: 'The team website v1.0 was launched with a simple project summary.' },
  { date: '2024-09-09', keyPoints: 'Initial Project Launch', details: 'The EZLift Labot project was officially launched, with the team assembled and ideation process begun.' }
];


const CollapsibleCard = ({ date, keyPoints, details, images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [fullImage, setFullImage] = useState(null);

  const toggleCard = () => setIsOpen(!isOpen);

  return (
    <div style={{ maxWidth: "80%" }} className={`collapsible-card ${isOpen ? 'open' : ''}`} onClick={toggleCard}>
      <div className="card-header">
        <div className="card-date">{date}</div>
        <div className="card-keypoints">{keyPoints}</div>
      </div>
      {isOpen && (
        <div className="card-details">
          <p>{details}</p>
          {images && images.length > 0 && (
            <div className="image-gallery">
              <h4>Related Images</h4>
              <div className="image-thumbnails">
                {images.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`Update ${index}`} 
                    className="thumbnail" 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent collapsing when clicking on an image
                      setFullImage(image);
                    }} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {fullImage && (
        <div className="image-overlay" onClick={() => setFullImage(null)}>
          <img src={fullImage} alt="Full Preview" className="full-image" />
        </div>
      )}
    </div>
  );
};

const UpdateLog = () => {
  return (
    <section id="updates" className="updates">
      <h3>Update Log</h3>
      <div className="timeline">
        {updateLog.map((update, index) => (
          <CollapsibleCard
            key={index}
            date={update.date}
            keyPoints={update.keyPoints}
            details={update.details}
            images={update.images || []}
          />
        ))}
      </div>
    </section>
  );
};

export default UpdateLog;