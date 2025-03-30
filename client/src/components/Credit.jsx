import React from "react";
import { useParams, Link } from "react-router-dom";
import "../style/Credits.css";

const CreditsPage = () => {
    const { id } = useParams();
    const creditOptions = [
        {
            title: "Personal Loan",
            description: "Get instant personal loans with minimal documentation. Enjoy competitive interest rates and flexible repayment options tailored to your needs.",
            interestRate: "10.5%",
            tenure: "Up to 5 years",
            icon: "👤",
        },
        {
            title: "Home Loan",
            description: "Make your dream home a reality with our affordable home loans. We offer attractive interest rates and extended tenure options for your convenience.",
            interestRate: "8.9%",
            tenure: "Up to 20 years",
            icon: "🏠",
        },
        {
            title: "Business Loan",
            description: "Fuel your business growth with our flexible business loans. Quick approval process and customized repayment plans to match your business cycle.",
            interestRate: "12.0%",
            tenure: "Up to 10 years",
            icon: "💼",
        },
        {
            title: "Education Loan",
            description: "Invest in your future with our education loans. We support your academic aspirations with competitive rates and student-friendly repayment terms.",
            interestRate: "9.5%",
            tenure: "Up to 7 years",
            icon: "🎓",
        },
    ];

    const applyForLoan = (loanType) => {
        alert(`Application for ${loanType} started. Our team will contact you shortly.`);
    };

    return (
        <div className="credits-container">
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
                        className="nav-link active"
                    >
                        <h4>Credit</h4>
                    </Link>
                    <Link
                        to={`/account-details/${id}/insurance`}
                        className="nav-link"
                    >
                        <h4>Insurance</h4>
                    </Link>
                </div>
            </div>

            <div className="main-content">
                <div className="credits-header">
                    <h1 className="page-title">Credit & Loans</h1>
                </div>

                <div className="credits-grid">
                    {creditOptions.map((option, index) => (
                        <div key={index} className="credit-card">
                            <div style={{ fontSize: '2rem', marginBottom: '15px' }}>
                                {option.icon}
                            </div>
                            <h3 className="credit-title">{option.title}</h3>
                            <p className="credit-description">{option.description}</p>
                            <div className="credit-details">
                                <div className="detail-item">
                                    <span className="detail-label">Interest Rate</span>
                                    <span className="detail-value interest-rate">
                                        {option.interestRate}
                                    </span>
                                </div>
                                <div className="detail-item">
                                    <span className="detail-label">Tenure</span>
                                    <span className="detail-value tenure">
                                        {option.tenure}
                                    </span>
                                </div>
                            </div>
                            <button
                                className="apply-button"
                                onClick={() => applyForLoan(option.title)}
                            >
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CreditsPage;
