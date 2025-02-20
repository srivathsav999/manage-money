import React from "react";
import { useParams, Link } from "react-router-dom";
import "../style/Insurance.css";

const InsurancePage = () => {
    const { id } = useParams();
    const insuranceOptions = [
        {
            title: "Health Insurance",
            description: "Comprehensive health coverage for you and your family with cashless treatment at 5000+ network hospitals across India.",
            coverage: "Up to ₹10 Lakh",
            premium: "Starting at ₹500/month",
            icon: "🏥",
            features: [
                "Cashless hospitalization",
                "Pre & post hospitalization coverage",
                "No claim bonus",
                "Free health check-ups"
            ]
        },
        {
            title: "Car Insurance",
            description: "Protect your vehicle with comprehensive coverage including 24/7 roadside assistance and zero depreciation coverage.",
            coverage: "Up to ₹5 Lakh",
            premium: "Starting at ₹300/month",
            icon: "🚗",
            features: [
                "24/7 roadside assistance",
                "Zero depreciation cover",
                "Personal accident cover",
                "Third-party liability"
            ]
        },
        {
            title: "Home Insurance",
            description: "Secure your home against natural disasters, theft, and accidents with our comprehensive home protection plan.",
            coverage: "Up to ₹25 Lakh",
            premium: "Starting at ₹1,000/month",
            icon: "🏠",
            features: [
                "Natural disaster coverage",
                "Burglary protection",
                "Content insurance",
                "Liability coverage"
            ]
        },
        {
            title: "Travel Insurance",
            description: "Travel worry-free with comprehensive coverage including medical emergencies, trip cancellation, and lost baggage.",
            coverage: "Up to ₹2 Lakh",
            premium: "Starting at ₹200/trip",
            icon: "✈️",
            features: [
                "Medical emergency coverage",
                "Trip cancellation protection",
                "Lost baggage compensation",
                "24/7 global assistance"
            ]
        },
    ];

    const applyForInsurance = (insuranceType) => {
        alert(`Your application for ${insuranceType} has been initiated. Our insurance expert will contact you shortly.`);
    };

    return (
        <div className="insurance-container">
            <div className="sidebar">
                <div className="logo-container">
                    <img
                        src="https://open-frontend-bucket.s3.amazonaws.com/logos/logo-type-purple.svg"
                        alt="Open Logo"
                        className="logo"
                    />
                </div>
                <div className="nav-cards">
                    <Link
                        to={`/account-details/${id}/cashflow`}
                        className="nav-link"
                    >
                        <h4>Cashflow Analytics</h4>
                    </Link>
                    <Link
                        to={`/account-details/${id}/receivables`}
                        className="nav-link"
                    >
                        <h4>Receivables</h4>
                    </Link>
                    <Link
                        to={`/account-details/${id}/payables`}
                        className="nav-link"
                    >
                        <h4>Payables</h4>
                    </Link>
                    <Link
                        to={`/account-details/${id}/reports`}
                        className="nav-link"
                    >
                        <h4>Reports</h4>
                    </Link>
                    <Link
                        to={`/account-details/${id}/credit`}
                        className="nav-link"
                    >
                        <h4>Credit</h4>
                    </Link>
                    <Link
                        to={`/account-details/${id}/insurance`}
                        className="nav-link active"
                    >
                        <h4>Insurance</h4>
                    </Link>
                </div>
            </div>

            <div className="main-content">
                <div className="insurance-header">
                    <h1 className="page-title">Insurance Plans</h1>
                </div>

                <div className="insurance-grid">
                    {insuranceOptions.map((option, index) => (
                        <div key={index} className="insurance-card">
                            <div className="insurance-icon">
                                {option.icon}
                            </div>
                            <h3 className="insurance-title">{option.title}</h3>
                            <p className="insurance-description">{option.description}</p>
                            
                            <ul className="features-list">
                                {option.features.map((feature, idx) => (
                                    <li key={idx} className="feature-item">
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="insurance-details">
                                <div className="detail-item">
                                    <span className="detail-label">Coverage</span>
                                    <span className="detail-value coverage-value">
                                        {option.coverage}
                                    </span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Premium</span>
                                    <span className="detail-value premium-value">
                                        {option.premium}
                                    </span>
                                </div>
                            </div>

                            <button
                                className="apply-button"
                                onClick={() => applyForInsurance(option.title)}
                            >
                                Get Insured Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InsurancePage;
