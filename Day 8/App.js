
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import Terms from "./components/Layout/Terms";
import Privacy from "./components/Layout/Privacy";
import Faq from "./components/Layout/Faq";

import Login from "./pages/Login";
import './App.css';
// import RegisterForm from './Component/Reg';

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reg from './pages/Reg';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Faq" element={<Faq />} />  
          <Route path="/login" element={<Login />} />       
<Route path="/reg" element={<Reg />}/>
<Route path="/" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
