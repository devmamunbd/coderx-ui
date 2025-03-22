import "./App.css";
import According from "./components/According";
import CompanyLogo from "./components/CompanyLogo";
import FeaturesSection from "./components/FeaturesSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PricingBox from "./components/PricingBox";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <CompanyLogo />
        <FeaturesSection />
        <PricingBox />
        <According />
        <ContactUs />
        <Footer />
      </div>
    </>
  );
}

export default App;
