import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { VscDebugStart } from 'react-icons/vsc';
import { MdWorkOutline, MdOutlineSchool } from 'react-icons/md';
import { Chip } from '@mui/material';

export default function MyTimeline() {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          iconStyle={{ background: '#754A2E', color: '#fff' }}
          icon={<MdWorkOutline />}>
          <h3 className="vertical-timeline-element-title">Software Engineer and CEO</h3>
          <h4 className="vertical-timeline-element-subtitle">ZENAMO</h4>
          <p>
            Developing several software projects for customers containing data exploration and
            analysis. Team lead of a small development team working on a new data analysis software
            for industry machines.
          </p>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 20 }}>
            <Chip label="React" size="small" />
            <Chip label="React Native" size="small" />
            <Chip label="C#" size="small" />
            <Chip label="PostgreSQL" size="small" />
            <Chip label="ASP.NET Core" size="small" />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: '7px solid  #754A2E' }}
          date="2019 - present"
          iconStyle={{ background: '#754A2E', color: '#fff' }}
          icon={<MdOutlineSchool />}>
          <h3 className="vertical-timeline-element-title">Mediainformatics Student</h3>
          <h4 className="vertical-timeline-element-subtitle">OTH Amberg</h4>
          <p>
            Software engineering, Data Exploration, User Experience, Visual Design, Project
            Management
          </p>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 20 }}>
            <Chip label="React" size="small" />
            <Chip label="Java" size="small" />
            <Chip label="C#" size="small" />
            <Chip label="C++" size="small" />
            <Chip label="Python" size="small" />
            <Chip label="WPF" size="small" />
            <Chip label="Express.js" size="small" />
            <Chip label="PostgreSQL" size="small" />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2020"
          iconStyle={{ background: '#754A2E', color: '#fff' }}
          icon={<MdWorkOutline />}>
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">Mühlbauer GmbH & Co. KG</h4>
          <p>
            Developing and maintaining several software projects. One of the largest software
            projects was a management platform for self driving robots.
          </p>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 20 }}>
            <Chip label="Angular" size="small" />
            <Chip label="C#" size="small" />
            <Chip label="PostgreSQL" size="small" />
            <Chip label="PostgreSQL" size="small" />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2019"
          iconStyle={{ background: '#754A2E', color: '#fff' }}
          icon={<MdOutlineSchool />}>
          <h3 className="vertical-timeline-element-title">Apprentice - Software Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">Mühlbauer GmbH & Co. KG</h4>
          <p>
            Creating several software projects for internal use and for industry machines.
            Presenting new software features to customers and taking care of project progress.
          </p>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 20 }}>
            <Chip label="C#" size="small" />
            <Chip label="WPF" size="small" />
            <Chip label="SQLite" size="small" />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2017"
          iconStyle={{ background: '#754A2E', color: '#fff' }}
          icon={<MdOutlineSchool />}>
          <h3 className="vertical-timeline-element-title">Apprentice - System Administrator</h3>
          <h4 className="vertical-timeline-element-subtitle">Mühlbauer GmbH & Co. KG</h4>
          <p>IT Hotline, maintaining servers</p>
          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginTop: 20 }}>
            <Chip label="IT Hotline" size="small" />
            <Chip label="Maintaining servers" size="small" />
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: '#F79C60', color: '#fff' }}
          icon={<VscDebugStart />}
        />
      </VerticalTimeline>
    </div>
  );
}
