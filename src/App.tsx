import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Home from "./pages/Home";
// import Profil from "./pages/Profil";
// import Detail from "./pages/Detail";
// import Sewakan from "./pages/Sewakan";
// import Disewakan from "./pages/Disewakan";
// import Riview from "./pages/Riview";

const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/Home" element={<Home />} />
          {/* <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/Sewakan" element={<Sewakan />} />
          <Route path="/Sewakan" element={<Disewakan />} />
          <Route path="/Sewakan" element={<Riview />} /> */}
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
