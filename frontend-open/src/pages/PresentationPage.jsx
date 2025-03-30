import React from "react";
import Navigation from "../components/Navigation";
import "../style/Presentation.css";

const PresentationPage = () => {
    return (
        <>
            <Navigation />
            <div className="presentation-container">
                <section className="hero-section">
                    <h1>Sales & Operations Management System</h1>
                    <p>A comprehensive Node.js solution for small businesses</p>
                </section>

                <section className="features-section">
                    <h2>Key Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">👥</div>
                            <h3>Customer Onboarding</h3>
                            <ul>
                                <li>Digital KYC verification</li>
                                <li>Document upload and validation</li>
                                <li>Business profile creation</li>
                                <li>Automated approval workflows</li>
                                <li>Progress tracking dashboard</li>
                            </ul>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">💳</div>
                            <h3>Subscription Management</h3>
                            <ul>
                                <li>Flexible subscription plans</li>
                                <li>Automated billing cycles</li>
                                <li>Payment gateway integration</li>
                                <li>Usage-based pricing</li>
                                <li>Subscription analytics</li>
                            </ul>
                        </div>

                        <div className="feature-card">
                            <div className="feature-icon">🎯</div>
                            <h3>Personalized Offers</h3>
                            <ul>
                                <li>AI-driven recommendations</li>
                                <li>Customer segmentation</li>
                                <li>Dynamic pricing engine</li>
                                <li>Campaign management</li>
                                <li>Performance tracking</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="tech-stack-section">
                    <h2>Technical Implementation</h2>
                    <div className="tech-details">
                        <div className="tech-group">
                            <h3>Backend Architecture</h3>
                            <ul>
                                <li>Node.js with Express framework</li>
                                <li>MongoDB for flexible data storage</li>
                                <li>Redis for caching and sessions</li>
                                <li>JWT for secure authentication</li>
                                <li>Microservices architecture</li>
                            </ul>
                        </div>
                        
                        <div className="tech-group">
                            <h3>Integration Points</h3>
                            <ul>
                                <li>Payment gateways (Stripe/Razorpay)</li>
                                <li>KYC verification APIs</li>
                                <li>Email/SMS notification services</li>
                                <li>Analytics and reporting tools</li>
                                <li>CRM systems integration</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="workflow-section">
                    <h2>Business Workflows</h2>
                    <div className="workflow-steps">
                        <div className="workflow-step">
                            <span className="step-number">1</span>
                            <h4>Customer Registration</h4>
                            <p>Digital signup process with email verification and basic information collection</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">2</span>
                            <h4>KYC Verification</h4>
                            <p>Document upload, verification, and business identity validation</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">3</span>
                            <h4>Plan Selection</h4>
                            <p>Browse subscription plans and select suitable options based on business needs</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">4</span>
                            <h4>Payment Setup</h4>
                            <p>Secure payment method configuration and initial subscription activation</p>
                        </div>
                        <div className="workflow-step">
                            <span className="step-number">5</span>
                            <h4>Personalization</h4>
                            <p>AI-driven analysis for customized offers and recommendations</p>
                        </div>
                    </div>
                </section>

                <section className="benefits-section">
                    <h2>Business Benefits</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h4>Streamlined Operations</h4>
                            <p>Automated workflows reduce manual intervention and operational costs</p>
                        </div>
                        <div className="benefit-card">
                            <h4>Enhanced Customer Experience</h4>
                            <p>Smooth onboarding and personalized service delivery</p>
                        </div>
                        <div className="benefit-card">
                            <h4>Revenue Optimization</h4>
                            <p>Smart pricing and targeted offers increase conversion rates</p>
                        </div>
                        <div className="benefit-card">
                            <h4>Data-Driven Insights</h4>
                            <p>Comprehensive analytics for informed business decisions</p>
                        </div>
                    </div>
                </section>

                <section className="monitoring-section">
                    <h2>System Monitoring</h2>
                    <div className="monitoring-grid">
                        <div className="monitoring-card">
                            <h4>Performance Metrics</h4>
                            <ul>
                                <li>API response times</li>
                                <li>System resource utilization</li>
                                <li>Database performance</li>
                                <li>Error rates and logging</li>
                            </ul>
                        </div>
                        <div className="monitoring-card">
                            <h4>Business Metrics</h4>
                            <ul>
                                <li>Customer conversion rates</li>
                                <li>Subscription analytics</li>
                                <li>Revenue tracking</li>
                                <li>User engagement metrics</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="security-section">
                    <h2>Security Measures</h2>
                    <div className="security-features">
                        <ul>
                            <li>End-to-end data encryption</li>
                            <li>Secure payment processing</li>
                            <li>Role-based access control</li>
                            <li>Regular security audits</li>
                            <li>Compliance with data protection regulations</li>
                        </ul>
                    </div>
                </section>
            </div>
        </>
    );
};

export default PresentationPage;
