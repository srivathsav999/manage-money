import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../style/Company.css';

const CompanyPage = () => {
    const teamMembers = [
        {
            name: 'Sarah Johnson',
            role: 'Chief Executive Officer',
            bio: '15+ years experience in fintech and banking',
            image: '👩‍💼'
        },
        {
            name: 'Michael Chen',
            role: 'Chief Technology Officer',
            bio: 'Former tech lead at major financial institutions',
            image: '👨‍💻'
        },
        {
            name: 'Priya Patel',
            role: 'Chief Product Officer',
            bio: 'Product veteran with focus on user experience',
            image: '👩‍💼'
        }
    ];

    const milestones = [
        {
            year: '2020',
            title: 'Company Founded',
            description: 'Started with a vision to revolutionize business banking'
        },
        {
            year: '2021',
            title: 'Series A Funding',
            description: '$25M raised to expand product offerings'
        },
        {
            year: '2022',
            title: 'International Expansion',
            description: 'Launched operations in multiple countries'
        },
        {
            year: '2023',
            title: 'One Million Users',
            description: 'Reached milestone of serving 1M+ businesses'
        }
    ];

    return (
        <div className="page-wrapper">
            <Navigation />
            <div className="company-container">
                <div className="hero-section">
                    <h1>Our Story</h1>
                    <p className="hero-text">
                        Founded in 2020, Open is revolutionizing business banking through 
                        technology and innovation. We're building the future of financial 
                        services for modern businesses.
                    </p>
                </div>

                <div className="mission-section">
                    <div className="mission-content">
                        <h2>Our Mission</h2>
                        <p>
                            To empower businesses with modern financial tools and make 
                            business banking seamless, efficient, and accessible to all.
                        </p>
                    </div>
                    <div className="values-grid">
                        <div className="value-card">
                            <span>💡</span>
                            <h3>Innovation</h3>
                            <p>Pushing boundaries in financial technology</p>
                        </div>
                        <div className="value-card">
                            <span>🤝</span>
                            <h3>Trust</h3>
                            <p>Building lasting relationships with our customers</p>
                        </div>
                        <div className="value-card">
                            <span>⚡</span>
                            <h3>Efficiency</h3>
                            <p>Streamlining financial operations</p>
                        </div>
                    </div>
                </div>

                <div className="timeline-section">
                    <h2>Our Journey</h2>
                    <div className="timeline">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="timeline-item">
                                <div className="timeline-year">{milestone.year}</div>
                                <div className="timeline-content">
                                    <h3>{milestone.title}</h3>
                                    <p>{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="team-section">
                    <h2>Leadership Team</h2>
                    <div className="team-grid">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="member-image">{member.image}</div>
                                <h3>{member.name}</h3>
                                <div className="member-role">{member.role}</div>
                                <p>{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="careers-section">
                    <h2>Join Our Team</h2>
                    <p>
                        We're always looking for talented individuals who share our vision 
                        of transforming business banking.
                    </p>
                    <button className="view-positions-btn">View Open Positions</button>
                </div>
            </div>
            
        </div>
    );
};

export default CompanyPage;
