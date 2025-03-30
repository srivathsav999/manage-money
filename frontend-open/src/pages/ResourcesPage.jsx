import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../style/Resources.css";

const ResourcesPage = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const resources = {
        guides: [
            {
                title: "Getting Started with Open",
                description:
                    "A comprehensive guide to setting up your business account",
                readTime: "5 min read",
                category: "Guide",
                icon: "📚",
            },
            {
                title: "Managing Business Finances",
                description: "Best practices for financial management",
                readTime: "8 min read",
                category: "Guide",
                icon: "💰",
            },
        ],
        tutorials: [
            {
                title: "Payment Integration Tutorial",
                description: "Learn how to integrate payment gateway",
                readTime: "10 min read",
                category: "Tutorial",
                icon: "💳",
            },
            {
                title: "API Implementation Guide",
                description: "Step-by-step guide to API integration",
                readTime: "15 min read",
                category: "Tutorial",
                icon: "🔧",
            },
        ],
        casestudies: [
            {
                title: "TechStart Success Story",
                description: "How TechStart scaled their operations with Open",
                readTime: "7 min read",
                category: "Case Study",
                icon: "📈",
            },
            {
                title: "RetailPro Growth Journey",
                description: "RetailPros digital transformation story",
                readTime: "6 min read",
                category: "Case Study",
                icon: "🏪",
            },
        ],
    };

    const tools = [
        {
            name: "ROI Calculator",
            description: "Calculate your return on investment",
            icon: "🧮",
        },
        {
            name: "Cash Flow Planner",
            description: "Plan and forecast your cash flow",
            icon: "📊",
        },
        {
            name: "Tax Calculator",
            description: "Estimate your tax obligations",
            icon: "📝",
        },
    ];

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="page-wrapper">
            <Navigation />
            <div className="resources-container">
                <div className="resources-header">
                    <h1>Resources</h1>
                    <p>Everything you need to succeed with Open</p>
                </div>

                <div className="search-section">
                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="search-input"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>

                <section className="resource-section">
                    <h2>Guides & Documentation</h2>
                    <div className="resource-grid">
                        {resources.guides.map((item, index) => (
                            <div key={index} className="resource-card">
                                <div className="resource-icon">{item.icon}</div>
                                <div className="resource-category">
                                    {item.category}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className="resource-meta">
                                    <span>{item.readTime}</span>
                                    <Link to="#" className="read-more-btn">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="resource-section">
                    <h2>Tutorials</h2>
                    <div className="resource-grid">
                        {resources.tutorials.map((item, index) => (
                            <div key={index} className="resource-card">
                                <div className="resource-icon">{item.icon}</div>
                                <div className="resource-category">
                                    {item.category}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className="resource-meta">
                                    <span>{item.readTime}</span>
                                    <Link to="#" className="read-more-btn">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="resource-section">
                    <h2>Case Studies</h2>
                    <div className="resource-grid">
                        {resources.casestudies.map((item, index) => (
                            <div key={index} className="resource-card">
                                <div className="resource-icon">{item.icon}</div>
                                <div className="resource-category">
                                    {item.category}
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <div className="resource-meta">
                                    <span>{item.readTime}</span>
                                    <Link to="#" className="read-more-btn">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="tools-section">
                    <h2>Business Tools</h2>
                    <div className="tools-grid">
                        {tools.map((tool, index) => (
                            <div key={index} className="tool-card">
                                <div className="tool-icon">{tool.icon}</div>
                                <h3>{tool.name}</h3>
                                <p>{tool.description}</p>
                                <Link to="#" className="try-tool-btn">
                                    Try Now
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="help-section">
                    <h2>Need Help?</h2>
                    <p>Our support team is here to assist you</p>
                    <Link to="#" className="contact-support-btn">
                        Contact Support
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ResourcesPage;
