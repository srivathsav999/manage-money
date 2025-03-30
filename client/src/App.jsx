import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Accounts from "./pages/accountsPage";
import AddAccountForm from "./components/AddAccountForm";
import AccountDetails from "./components/AccountDetails";
import AddTransactionForm from "./components/AddTransactionForm";
import HomePage from "./pages/HomePage";
import CashflowAnalytics from "./components/cashflow";
import Receivables from "./components/Receivables";
import Payables from "./components/Payables";
import Reports from "./components/Reports";
import CreditsPage from "./components/Credit";
import InsurancePage from "./components/Insurance";
import ProductsPage from "./pages/ProductsPage";
import SolutionsPage from "./pages/SolutionsPage";
import PartnersPage from "./pages/PartnersPage";
import CompanyPage from "./pages/CompanyPage";
import ResourcesPage from "./pages/ResourcesPage";
import Footer from "./components/Footer";
import PresentationPage from "./pages/PresentationPage";


function App() {
    const [count, setCount] = useState(0);

    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/accounts" element={<Accounts />} />
                    <Route
                        path="/AddAccountForm"
                        element={<AddAccountForm />}
                    />
                    <Route
                        path="/account-details/:id"
                        element={<AccountDetails />}
                    />
                    <Route
                        path="/account-details/:id/:section"
                        element={<AccountDetails />}
                    />
                    <Route
                        path="/account-details/:id/cashflow"
                        element={<CashflowAnalytics />}
                    />
                    <Route
                        path="/accounts/:accountId/Add-transactions"
                        element={<AddTransactionForm />}
                    />
                    <Route
                        path="/account-details/:id/receivables"
                        element={<Receivables />}
                    />
                    <Route
                        path="/account-details/:id/payables"
                        element={<Payables />}
                    />
                    <Route
                        path="/account-details/:id/reports"
                        element={<Reports />}
                    />
                    <Route
                        path="/account-details/:id/credit"
                        element={<CreditsPage />}
                    />
                    <Route
                        path="/account-details/:id/insurance"
                        element={<InsurancePage />}
                    />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/solutions" element={<SolutionsPage />} />
                    <Route path="/partners" element={<PartnersPage />} />
                    <Route path="/company" element={<CompanyPage />} />
                    <Route path="/resources" element={<ResourcesPage />} />
                    <Route
                        path="/presentation"
                        element={<PresentationPage />}
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
