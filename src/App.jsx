import "./App.css";
import According from "./components/According";
import CompanyLogo from "./components/CompanyLogo";
import FeaturesSection from "./components/FeaturesSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PricingBox from "./components/PricingBox";

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
      </div>
    </>
  );
}

export default App;
