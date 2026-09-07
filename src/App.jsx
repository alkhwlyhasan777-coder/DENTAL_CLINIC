import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import WhatsAppButton from "./common/WhatsAppButton";
function App() {
  return (
    <>
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="/appointment" element={<Appointment />} />
    </Routes>
    <WhatsAppButton/>
    </>
  );
}

export default App;