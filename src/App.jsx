import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";
import {
  Home,
  LoginSection,
  EducacionSection,
  ComunidadSection,
} from "./pages/indexExport";
import SobreNosotrosSection from "./pages/SobreNosotrosSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Comunidad" element={<ComunidadSection />} />
        <Route path="/Educacion" element={<EducacionSection />} />
        <Route path="/SobreNosotros" element={<SobreNosotrosSection />} />
        <Route path="/Login" element={<LoginSection />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
