import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Voluntario from "./pages/Voluntario/Voluntario";
import ComoAjudar from "./pages/ComoAjudar/ComoAjudar";
import "./globalStyle.scss";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voluntario" element={<Voluntario />} />
          <Route path="/como-ajudar" element={<ComoAjudar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
