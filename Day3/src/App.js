
import './App.css';
// import RegisterForm from './Component/Reg';
import Login from './Component/Login';
// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reg from './Component/Reg';
function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
      <Routes>
        <Route path="/reg" element={<Reg />}/>
        <Route path="/" element={<Login />}/>
        
      </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
