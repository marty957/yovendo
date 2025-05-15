import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PdfForm from "./components/PdfForm";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeSection from "./components/HomeSection";
import PdfSection from "./components/PdfSection";

function App() {
  return (
    <>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true
        }}
      >
        <Routes>
          <Route path="/" element={<HomeSection />} />
          <Route path="/addPdf" element={<PdfSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
