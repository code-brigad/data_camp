import { useTranslation } from "react-i18next";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Secton";
import Courses from "./components/courses/Courses";

function App() {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <Navbar />
      <Section />
      <Courses />
    </div>
  );
}

export default App;
