import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./components/About";
import RegisterPage from "./components/Register";
import LostFoundDashboard from "./components/Lost_and_Found";
import SeniorJuniorConnect from "./components/SeniorJuniorConnect";
import Communities from "./components/Communities";
import ComplaintBox from "./components/ComplaintBox";
import LoginPage from "./components/Login";
import ResultPortal from "./components/Result";

function App() {
  const location = useLocation();

  // pages where footer hidden
  const hideFooterRoutes = ["/register"];

  return (
    <>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="/about" element={<About />} />

        <Route path="/lostandfound" element={<LostFoundDashboard />} />

        <Route path="/seniorjuniorconnect" element={<SeniorJuniorConnect />} />

        <Route path="/communities" element={<Communities />} />

        <Route path="/complaint" element={<ComplaintBox />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/result" element={<ResultPortal />} />
      </Routes>

      {/* Footer Hide Logic */}
      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;
