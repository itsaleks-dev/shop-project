import "./assets/styles/style.scss";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";
import AppRoutes from "./routes";

function App() {
    return (
        <Router>
            <Header />

            <main>
                <AppRoutes />
            </main>

            <Footer />
        </Router>
    );
}

export default App
