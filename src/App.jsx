import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PdfForm from "./components/PdfForm";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeSection from "./components/HomeSection";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
