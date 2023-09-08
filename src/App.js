import { useTranslation } from "react-i18next";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Secton";

function App() {
  const { t, i18n } = useTranslation()
  return (
    <div>
      <Navbar />
      <Section />
    </div>
  );
}

export default App;
