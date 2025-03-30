import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../style/Solutions.css";

const SolutionsPage = () => {
    const solutions = [
        {
            title: "For Startups",
            description:
                "Scale your startup with modern banking solutions designed for rapid growth.",
            benefits: [
                "Quick account setup",
                "Integrated payment solutions",
                "Automated bookkeeping",
                "Startup-friendly credit options",
            ],
            icon: "🚀",
        },
        {
            title: "For SMEs",
            description:
                "Streamline your business operations with comprehensive financial tools.",
            benefits: [
                "Business current account",
                "Vendor payment automation",
                "GST-compliant invoicing",
                "Working capital solutions",
            ],
            icon: "💼",
        },
        {
            title: "For Enterprises",
            description:
                "Enterprise-grade solutions for complex financial operations.",
            benefits: [
                "Multi-user access control",
                "API integrations",
                "Custom reporting",
                "Dedicated support",
            ],
            icon: "🏢",
        },
        {
            title: "For Freelancers",
            description:
                "Manage your finances efficiently as an independent professional.",
            benefits: [
                "Easy invoicing",
                "Expense tracking",
                "Tax management",
                "International payments",
            ],
            icon: "👨‍💻",
        },
    ];

    return (
        <div className="page-wrapper">
            <Navigation />
            <div className="solutions-container">
                <div className="solutions-header">
                    <h1>Solutions</h1>
                    <p>Tailored financial solutions for every business type</p>
                </div>

                <div className="solutions-grid">
                    {solutions.map((solution, index) => (
                        <div key={index} className="solution-card">
                            <div className="solution-icon">{solution.icon}</div>
                            <h2>{solution.title}</h2>
                            <p>{solution.description}</p>
                            <div className="benefits-list">
                                {solution.benefits.map((benefit, idx) => (
                                    <div key={idx} className="benefit-item">
                                        <span className="check-icon">✓</span>
                                        {benefit}
                                    </div>
                                ))}
                            </div>
                            <button className="explore-btn">
                                Explore Solution
                            </button>
                        </div>
                    ))}
                </div>

                <div className="contact-section">
                    <h2>Need a custom solution?</h2>
                    <p>
                        Talk to our experts to find the right solution for your
                        business
                    </p>
                    <button className="contact-btn">Contact Sales</button>
                </div>
            </div>
        </div>
    );
};

export default SolutionsPage;
