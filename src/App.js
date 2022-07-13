import "./App.css";
import Contact from "./component/Contact/Contact";
import Experience from "./component/Experience/Experience";
import Footer from "./component/Footer/Footer";
import Intro from "./component/intro/Intro";
import Navbar from "./component/navbar/Navbar";
import Portfolio from "./component/Portfolio/Portfolio";
import Services from "./component/services/Services";
import Testimonial from "./component/Testimonials/Testimonial";
import Works from "./component/Works/Works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
