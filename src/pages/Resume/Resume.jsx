import React from 'react';
import { FaBookReader, FaRegBookmark } from "react-icons/fa";
import TimelineItem from './TimelineItem';
import SkillItem from './SkillItem';

const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="PSNA College of Engineering and Technology"
            date="2021 — 2025"
            description="Bachelor of Engineering in Computer Science | CGPA - 7.62(upto 5th sem)"
          />
          <TimelineItem
            title="Achyuta Public School"
            date="2019 — 2021"
            description="HSc Education | Percentage - 74.8"
          />
          <TimelineItem
            title="Shri Maharishi Vidhya Mandhir"
            date="2017 — 2019"
            description="SSLC Education | Percentage - 73.8"
          />
          
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Internships</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Code Alpha"
            date="Duration - 1 Month(March, 2024)"
            description="Web Development winternship"
          />
          <TimelineItem
            title="NSIC - Technical Service Centre "
            date="Duration - 1 week(July, 2023)"
            description="Web Development based - Implant training"
          />
          
          
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Achievements</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Kongu Nadu college of Engineering and technology"
            date="24 February , 2024"
            description="In this competition our team have won the 3rd place in 'Idea - Presentation' competition and 2nd place in 'Rapid riddle' event.  "
          />
          <TimelineItem
            title="Cyber - Monk"
            date="10th March, 2022"
            description="Secured Runner-up position in a competition conducted at the end of a 2 day workshop organised by the collabration of our college and the team of CYBER MONK"
          />
          
          
        </ol>
      </div>

      

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Workshops</h3>
        </div>
        <ol className="timeline-list">
          
          <TimelineItem
            title="NIT - TRICHY"
            date="Duration - 2 days(3rd and 4th March, 2023)"
            description="Web Development workshop"
          />
          <TimelineItem
            title="Kumarasamy college of Engineering and technology"
            date="1 day (6th May, 2022)"
            description="Workshop on Python for Artifical Intelligence and Data Science"
          />
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Participation</h3>
        </div>
        <ol className="timeline-list">
          
          <TimelineItem
            title="Kalam awards"
            date="22 September, 2023"
            description="The experience was new and excited to participate in Dr.Kalam Young Acheivers Awards organised by World Youth Federation."
          />
          
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaRegBookmark />
          </div>
          <h3 className="h3">Skills</h3>
        </div>
        <ol className="timeline-list">
          
          <TimelineItem
            title="HTML"
          />
          <TimelineItem
            title="CSS"
          />
          <TimelineItem
            title="JavaScript"
          />
          <TimelineItem
            title="React JS"
          />
          <TimelineItem
            title="Basics in JAVA"
          />
          <TimelineItem
            title="Bacics in Python"
          />
          
        </ol>
      </div>

      {/* <div className="skill">
        <h3 className="h3 skills-title">Languages</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML, CSS, JS" value={90} />
          <SkillItem title="React JS" value={70} />
          <SkillItem title="JAVA" value={60} />
        </ul>
      </div> */}
    </section>
  );
};

export default Resume;
