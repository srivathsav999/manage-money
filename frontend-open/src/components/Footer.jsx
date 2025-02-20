import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer fade-in">
            <div className="footer-content">
                <div className="footer-brand">
                    <div className="footer-logo">Open</div>
                    <p className="footer-description">
                        Simplify your business finances with Open's connected banking platform. 
                        Manage payments, receivables, and reconciliation all in one place.
                    </p>
                    <div className="footer-social">
                        <div className="social-icon">
                            <span>𝕏</span>
                        </div>
                        <div className="social-icon">
                            <span>in</span>
                        </div>
                        <div className="social-icon">
                            <span>f</span>
                        </div>
                        <div className="social-icon">
                            <span>📸</span>
                        </div>
                    </div>
                </div>
                <div className="footer-links">
                    <h3>Product</h3>
                    <ul>
                        <li><Link to="#">Features</Link></li>
                        <li><Link to="#">Solutions</Link></li>
                        <li><Link to="#">Enterprise</Link></li>
                        <li><Link to="#">Pricing</Link></li>
                        <li><Link to="#">Security</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Company</h3>
                    <ul>
                        <li><Link to="#">About Us</Link></li>
                        <li><Link to="#">Careers</Link></li>
                        <li><Link to="#">Press</Link></li>
                        <li><Link to="#">Partners</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h3>Resources</h3>
                    <ul>
                        <li><Link to="#">Blog</Link></li>
                        <li><Link to="#">Help Center</Link></li>
                        <li><Link to="#">Documentation</Link></li>
                        <li><Link to="#">API Reference</Link></li>
                        <li><Link to="#">Status</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div>© {new Date().getFullYear()} Open. All rights reserved.</div>
                <div className="footer-legal">
                    <Link to="#">Terms of Service</Link>
                    <Link to="#">Privacy Policy</Link>
                    <Link to="#">Cookie Settings</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
