import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/Pages/AboutUs";
import Home from "./Components/Pages/Home";
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup";
import Dashboard from "./Components/Pages/Dashboard";
import AddItem from "./Components/Pages/AddItem";
import AdditionalInfo from "./Components/Pages/AdditionalInfo";
import Image from "./Components/Layouts/Image";
import Library from "./Components/Pages/Library";
import EditInfo from "./Components/Pages/EditInfo";
import MuseumInfo from "./Components/Pages/MuseumInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddItem />}>
          <Route index element={<AdditionalInfo />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="additem" element={<AddItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
