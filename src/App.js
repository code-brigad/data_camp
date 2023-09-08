import { useTranslation } from "react-i18next";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Secton";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";

function App() {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <Navbar />
      <Section />
      <Courses />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
