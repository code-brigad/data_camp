import { useTranslation } from "react-i18next";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Secton";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const { t, i18n } = useTranslation()

  useEffect(() => {
    Aos.init({
      once: true,
      duration: 400,
      offset: 150,
    });
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <Navbar />
      <Section />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
