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
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
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
