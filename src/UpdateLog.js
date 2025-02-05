import React, { useState } from 'react';
import './App.css';

const updateLog = [
  { date: '2024-09-09', keyPoints: 'Initial Project Launch', details: 'The EZLift project was officially launched, with the team assembled and ideation process begun.' },
  { date: '2024-09-19', keyPoints: 'Website Launch', details: 'The team website v1.0 was launched with a simple project summary.' },
  { date: '2024-09-23', keyPoints: 'Problem Finalization', details: 'Finalized the problem statement and began discussing constraints and criteria for the design.' },
  { date: '2024-09-30', keyPoints: 'Solution Exploration', details: 'Presented four potential solutions and conducted a review of three related patents for insights into design approaches.' },
  { date: '2024-10-07', keyPoints: 'Solution Selection', details: 'Selected the best solution for the EZLift robot based on design constraints and feasibility analysis.' },
  { date: '2024-10-21', keyPoints: 'Preliminary Design Presentation', details: 'Delivered the PDP, showcasing the high-level design approach, key components, and anticipated challenges.' },
  { date: '2024-11-04', keyPoints: 'Detailed Design Completion', details: 'Completed the detailed design, including CAD models and mechanical, electrical, and control system schematics.' },
  { date: '2024-11-11', keyPoints: 'Design Verification', details: 'Validated the design through simulations and preliminary testing of the motor and lift system performance.' },
  { date: '2024-11-25', keyPoints: 'Final Design Presentation', details: 'Presented the finalized EZLift design, demonstrating its capabilities and compliance with the initial constraints and criteria.' },
  { date: '2024-12-02', keyPoints: 'Final Report and Web Update', details: 'Submitted the final design report, updated the team webpage with detailed documentation and a project summary.' }
];

const CollapsibleCard = ({ date, keyPoints, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div  style={{maxWidth: "80%"}} className={`collapsible-card ${isOpen ? 'open' : ''}`} onClick={toggleCard}>
      <div className="card-header">
        <div className="card-date">{date}</div>
        <div className="card-keypoints">{keyPoints}</div>
      </div>
      {isOpen && (
        <div className="card-details">
          <p>{details}</p>
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
            />
            ))}
        </div>
        </section>
    );
};
  
export default UpdateLog;
