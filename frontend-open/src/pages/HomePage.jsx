import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import "../style/HomePage.css";
import microsoft from "../assets/microsoft.png";
import google from "../assets/google.png";
import amazon from "../assets/amazon.png";
import meta from "../assets/meta.png";


const HomePage = () => {
    return (
        <div>
            <Navigation />
            <div className="main-header">
                <h1 className="main-heading fade-in">
                    Simplifying Business Banking
                </h1>
                <div className="subheading-container">
                <p className="subheading fade-in">
                    Experience{" "}
                    <span className="highlight">seamless banking</span> designed
                    for modern businesses. Open an account in minutes and access
                    a suite of powerful financial tools.
                </p>
                </div>
                <Link to="/register" className="cta-button fade-in">
                    Get Started Now
                </Link>
                <div className="logo-bar fade-in">
                    <div className="rolling-logos">
                        <img
                            src={microsoft}
                            alt="Microsoft Logo"
                            className="partner-logo"
                        />
                        <img
                            src={google}
                            alt="Google Logo"
                            className="partner-logo"
                        />
                        <img
                            src={amazon}
                            alt="Amazon Logo"
                            className="partner-logo"
                        />
                        <img
                            src={meta}
                            alt="Meta Logo"
                            className="partner-logo"
                        />
                        <img
                            src={microsoft}
                            alt="Microsoft Logo"
                            className="partner-logo"
                        />
                        <img
                            src={google}
                            alt="Google Logo"
                            className="partner-logo"
                        />
                        <img
                            src={amazon}
                            alt="Amazon Logo"
                            className="partner-logo"
                        />
                        <img
                            src={meta}
                            alt="Meta Logo"
                            className="partner-logo"
                        />
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default HomePage;
