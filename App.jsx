import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Features from "./components/Features";
import Specs from "./components/Specs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-graphite-900">
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <Specs />
      <Contact />
      <Footer />
    </div>
  );
}
