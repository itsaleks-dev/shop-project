import { Routes, Route } from "react-routes-dom";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import CartPage from "./pages/CartPage";
import UserPage from "./pages/UserPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactsPage from "./pages/ContactsPage";
import CooperationPage from "./pages/CooperationPage";
import DeliveryPaymentPage from "./pages/DeliveryPaymentPage";
import ReturnsExchangePage from "./pages/ReturnsExchangePage";
import PublicOfferPage from "./pages/PublicOfferPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import CheckoutPage from "./pages/CheckoutPage";
import PaymentPage from "./pages/PaymentPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/cooperation" element={<CooperationPage />} />
            <Route path="/delivery" element={<DeliveryPaymentPage />} />
            <Route path="/returns" element={<ReturnsExchangePage />} />
            <Route path="/offer" element={<PublicOfferPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} /> 
        </Routes>
    )
}