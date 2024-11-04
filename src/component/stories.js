import React from 'react';
import './StoriesBehindUs.css';

const stories = [
    {
        id: 1,
        name: 'Peter Tanoewidjaya',
        role: 'CTO Mayzer',
        title: 'How we collaborated with Boston Dynamics to create many smart devices',
        image: 'peter.jpg',
        link: '#'
    },
    {
        id: 2,
        name: 'Ronald van Pierro',
        role: 'Business Manager Mayzer',
        title: 'Negotiation process between Mayzer team with hundreds of investors',
        image: 'ronald.jpg',
        link: '#'
    },
    {
        id: 3,
        name: 'Angelica Greeceman',
        role: 'Machine Learning Dev',
        title: 'Our story of learning how smart devices work & how to connect with Mayzer',
        image: 'angelica.jpg',
        link: '#'
    },
    {
        id: 3,
        name: 'Angelica Greeceman',
        role: 'Machine Learning Dev',
        title: 'Our story of learning how smart devices work & how to connect with Mayzer',
        image: 'angelica.jpg',
        link: '#'
    },
    {
        id: 3,
        name: 'Angelica Greeceman',
        role: 'Machine Learning Dev',
        title: 'Our story of learning how smart devices work & how to connect with Mayzer',
        image: 'angelica.jpg',
        link: '#'
    },
    {
        id: 3,
        name: 'Angelica Greeceman',
        role: 'Machine Learning Dev',
        title: 'Our story of learning how smart devices work & how to connect with Mayzer',
        image: 'angelica.jpg',
        link: '#'
    },
    // Add more stories if needed
];

const StoriesBehindUs = () => {
    return (
        <div className="stories-container">
            <h2 className="stories-title">Stories Behind Us</h2>
            <p className="stories-description">Read our stories behind how YESPTech was made and used by many people around the world.</p>
            <div className="stories-wrapper">
                {stories.map((story) => (
                    <div key={story.id} className="story-card">
                        <img src={story.image} alt={story.name} className="story-image" />
                        <div className="story-content">
                            <h3 className="story-name">{story.name}</h3>
                            <p className="story-role">{story.role}</p>
                            <p className="story-title">{story.title}</p>
                            <a href={story.link} className="story-link">Read this story &rarr;</a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="navigation-buttons">
                <button className="nav-button prev-button">&#8592;</button>
                <button className="nav-button next-button">&#8594;</button>
            </div>
        </div>
    );
};

export default StoriesBehindUs;
