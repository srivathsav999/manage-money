import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AccountList from "../components/AccountList";
import "../style/Accounts.css";

const AccountsPage = () => {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleAddAccountClick = () => {
        navigate("/AddAccountForm");
    };

    return (
        <>
            <Navigation />
            <div className="accounts-container">
                <div className="accounts-content">
                    <div className="accounts-header">
                        <div>
                            <h1 className="accounts-title">Your Accounts</h1>
                            <p className="accounts-subtitle">
                                Manage all your financial accounts in one place
                            </p>
                        </div>
                        <div className="accounts-actions">
                            <button onClick={handleAddAccountClick} className="action-button primary-button">
                                <span>➕</span> Add Account
                            </button>
                            <button className="action-button secondary-button">
                                <span>🔄</span> Refresh
                            </button>
                        </div>
                    </div>

                    <div className="accounts-main">
                        {error && <div className="error-message">{error}</div>}
                        <AccountList setError={setError} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AccountsPage;

