import "./App.css";
import Login from "./Components/Auth/Login/Login";
import ResponsiveAppBar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Register from "./Components/Auth/Register/Register";
import Resume from "./Components/Resume/Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <ResponsiveAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Register /> */}
    </>
  );
}

export default App;
