import "./App.css";
import Login from "./Components/Auth/Login/Login";
import ResponsiveAppBar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Register from "./Components/Auth/Register/Register";
import Resume from "./Components/Resume/Resume";
import ResumeFormat from "./Components/Resume/ResumeFormat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import FAQs from "./Components/FAQ/FAQ";
import Contact from "./Components/Contact/Contact";
import Otp from "./Components/Auth/OTP/Otp";
import Form from "./Components/Form/Form";
import Nav from "./Components/Navbar/Nav";
// import ButtonAppBar from "./Components/Navbar/Navbar";
function App() {
  return (
    <>
      {/* <ResponsiveAppBar /> */}
      <BrowserRouter>
        <Nav />
        {/* <Otp /> */}
        {/* <ButtonAppBar /> */}
        {/* <Form /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/enterOtp" element={<Otp />} />
          <Route path="/resume" element={<Resume />} />

          <Route path="/resumeTemplate" element={<ResumeFormat />} />
        </Routes>
      </BrowserRouter>
      {/* <FAQs /> */}
      {/* <Contact /> */}
      <Footer />
      {/* <Login /> */}
      {/* <Register /> */}
    </>
  );
}

export default App;
