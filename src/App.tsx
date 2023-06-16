import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Beranda from "./pages/Beranda";
import Validasi from "./pages/Validasi";
import Profil from "./pages/Profil";
import Detail from "./pages/Detail";
import Pesanan from "./pages/Pesanan";
import Sewakan from "./pages/Sewakan";
import Disewakan from "./pages/Disewakan";
import Riview from "./pages/Riview";

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Beranda" element={<Beranda />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Validasi" element={<Validasi />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Pesanan" element={<Pesanan />} />
          <Route path="/Sewakan" element={<Sewakan />} />
          <Route path="/Disewakan" element={<Disewakan />} />
          <Route path="/Riview" element={<Riview />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
