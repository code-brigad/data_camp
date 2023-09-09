import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Secton";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 600,
      offset: 150,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-8">
        <Section />
        <Courses />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
