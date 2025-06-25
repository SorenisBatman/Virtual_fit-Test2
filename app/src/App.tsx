
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Measurements } from "./pages/Measurements";
import { TryOn } from "./pages/TryOn";
import { Contact } from "./pages/Contact";
import { AvatarViewer } from "./components/AvatarViewer";
import { MeasurementProvider } from "./contexts/MeasurementContext";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <MeasurementProvider>
      <Router>
        <div className="min-h-screen bg-neutral">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/measurements" element={<Measurements />} />
              <Route path="/avatar" element={<AvatarViewer />} />
              <Route path="/try-on" element={<TryOn />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </Router>
    </MeasurementProvider>
  );
}
