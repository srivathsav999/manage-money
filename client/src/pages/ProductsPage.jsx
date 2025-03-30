import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import '../style/Products.css';

const ProductsPage = () => {
    const products = [
        {
            title: 'Business Banking',
            description: 'Modern banking solution for businesses with integrated payments, collections, and expense management.',
            icon: '🏦',
            features: ['Current Account', 'Payment Gateway', 'Vendor Payments', 'Expense Cards']
        },
        {
            title: 'Payroll Management',
            description: 'Streamline your payroll process with automated salary disbursements and compliance management.',
            icon: '💰',
            features: ['Automated Payroll', 'Tax Compliance', 'Employee Portal', 'Statutory Reports']
        },
        {
            title: 'Expense Management',
            description: 'Track and manage all your business expenses with smart corporate cards and automated bookkeeping.',
            icon: '📊',
            features: ['Corporate Cards', 'Expense Tracking', 'Receipt Management', 'Budget Controls']
        },
        {
            title: 'Business Lending',
            description: 'Quick and collateral-free business loans to help you manage cash flow and grow your business.',
            icon: '💳',
            features: ['Working Capital', 'Term Loans', 'Invoice Financing', 'Credit Line']
        }
    ];

    return (
        <div className="page-wrapper">
            <Navigation />
            <div className="products-container">
                <div className="products-header">
                    <h1>Our Products</h1>
                    <p>Comprehensive financial solutions for your business needs</p>
                </div>

                <div className="products-grid">
                    {products.map((product, index) => (
                        <div key={index} className="product-card">
                            <div className="product-icon">{product.icon}</div>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <div className="features-list">
                                {product.features.map((feature, idx) => (
                                    <div key={idx} className="feature-item">
                                        <span className="feature-bullet">•</span>
                                        {feature}
                                    </div>
                                ))}
                            </div>
                            <button className="learn-more-btn">Learn More</button>
                        </div>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default ProductsPage;
