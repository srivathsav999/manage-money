import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../style/Partners.css';

const PartnersPage = () => {
    const partnerTypes = [
        {
            title: 'Technology Partners',
            description: 'Integrate with our platform to enhance your product offerings',
            benefits: [
                'API access to banking services',
                'White-label solutions',
                'Technical documentation',
                'Developer support'
            ],
            icon: '🔧'
        },
        {
            title: 'Channel Partners',
            description: 'Grow your business by reselling Opens financial products',
            benefits: [
                'Competitive commissions',
                'Sales enablement',
                'Marketing support',
                'Partner portal access'
            ],
            icon: '🤝'
        },
        {
            title: 'Banking Partners',
            description: 'Join our network of banking institutions',
            benefits: [
                'Access to SME customers',
                'Digital banking solutions',
                'Risk management',
                'Compliance support'
            ],
            icon: '🏦'
        }
    ];

    const testimonials = [
        {
            quote: "Partnering with Open has helped us expand our financial service offerings significantly.",
            author: "John Smith",
            role: "CEO, TechFin Solutions"
        },
        {
            quote: "The integration process was smooth, and the support team was exceptional.",
            author: "Sarah Johnson",
            role: "CTO, Digital Banking Co."
        }
    ];

    return (
        <div className="page-wrapper">
            <Navigation />
            <div className="partners-container">
                <div className="partners-header">
                    <h1>Partner With Us</h1>
                    <p>Join our ecosystem of partners driving financial innovation</p>
                </div>

                <div className="partner-types-grid">
                    {partnerTypes.map((type, index) => (
                        <div key={index} className="partner-card">
                            <div className="partner-icon">{type.icon}</div>
                            <h2>{type.title}</h2>
                            <p>{type.description}</p>
                            <div className="benefits-list">
                                {type.benefits.map((benefit, idx) => (
                                    <div key={idx} className="benefit-item">
                                        <span className="check-icon">✓</span>
                                        {benefit}
                                    </div>
                                ))}
                            </div>
                            <button className="partner-btn">Become a Partner</button>
                        </div>
                    ))}
                </div>

                <div className="testimonials-section">
                    <h2>Partner Testimonials</h2>
                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="quote-mark">"</div>
                                <p className="quote">{testimonial.quote}</p>
                                <div className="author">
                                    <strong>{testimonial.author}</strong>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contact-section">
                    <h2>Ready to Partner?</h2>
                    <p>Get in touch with our partnership team</p>
                    <button className="contact-btn">Contact Us</button>
                </div>
            </div>
           
        </div>
    );
};

export default PartnersPage;
