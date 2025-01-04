import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [openDropdowns, setOpenDropdowns] = useState({ 0: true }); 
  const [openSubDropdowns, setOpenSubDropdowns] = useState({});

  const toggleDropdown = (index) => {
    setOpenDropdowns((previousState) => ({...previousState, [index]: !previousState[index],
    }));
  };

  const toggleSubDropdown = (parentIndex, subIndex) => {
    const key = `${parentIndex}-${subIndex}`;
    setOpenSubDropdowns((previousState) => ({...previousState, [key]: !previousState[key],
    }));
  };

  const menuItems = [
    { title: 'Home', link: '/' },
    { title: 'HTML Tutorial', levels: [
        {level: 'Level 1', topics: ['HTML Headings', 'HTML Paragraphs', 'HTML Formatting'],},
        {level: 'Level 2', topics: ['HTML Comments', 'HTML Links', 'HTML Lists'],},
        {level: 'Level 3', topics: ['HTML Images', 'HTML Forms', 'HTML Tables'],},],
    },
    { title: 'CSS Tutorial',levels: [
        {level: 'Level 1', topics: ['CSS Syntax', 'CSS Selectors', 'CSS Colors'],},
        {level: 'Level 2', topics: ['CSS Box Model', 'CSS Flexbox'],},
        {level: 'Level 3', topics: ['CSS Grid', 'CSS Animations', 'CSS Media Queries'],},],
    },
    { title: 'JavaScript Tutorial',levels: [
        {level: 'Level 1', topics: ['JS Variables', 'JS Functions'],},
        {level: 'Level 2', topics: ['JS Events', 'JS DOM'],},
        {level: 'Level 3', topics: ['JS Classes', 'JS JSON', 'Modules'],},],
    },
    { title: 'Quizzes', link: '/quizzes' },
    { title: 'About Us', link: '/about-us' },
    { title: 'References', link: '/references' },
  ];

  return (
    <div className="sidebar">
      <h2> Hsj Courses</h2>
      <ul>
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            {menuItem.levels ? (
              <>
              <button className="dropdown-btn" onClick={() => toggleDropdown(index)} >
                  {menuItem.title}
                  <span className="arrow">{openDropdowns[index] ? '▲' : '▼'}</span>
                </button>
                <ul className={`dropdown-container ${openDropdowns[index] ? 'open' : ''}`} >
                  {menuItem.levels.map((level, levelIndex) => (
                    <li key={levelIndex}>
                      <button className="dropdown-btn sub-dropdown" onClick={() => toggleSubDropdown(index, levelIndex)} >
                        {level.level}
                        <span className="arrow">
                          {openSubDropdowns[`${index}-${levelIndex}`] ? '▲' : '▶'}
                        </span>
                      </button>
                      <ul className={`dropdown-container ${ openSubDropdowns[`${index}-${levelIndex}`] ? 'open' : '' }`} >
                        {level.topics.map((topic, topicIndex) => (
                          <li key={topicIndex}>
                            <Link to={`/${menuItem.title.toLowerCase().replace
                            (/ /g, '-')}/${level.level.toLowerCase().replace(/ /g, '-')}/${topic.toLowerCase().replace(/ /g, '-')}`} >
                              {topic}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link to={menuItem.link} className="simple-link">
                {menuItem.title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
