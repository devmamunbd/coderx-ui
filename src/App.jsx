import "./App.css";
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
      </div>
    </>
  );
}

export default App;
