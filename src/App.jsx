import "./App.css";
import CompanyLogo from "./components/CompanyLogo";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <CompanyLogo />
      </div>
    </>
  );
}

export default App;
