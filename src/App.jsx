import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// import Cars from "./Components/Cars";
// import Events from "./Components/Events";
// import Grocerry from "./Components/Grocerry";
// import Lists from "./Components/Lists";
import MyForm from "./Components/MyForm";
import Layouts from "./Components/pages/Layouts";
import Home from "./Components/pages/Home";
import About from "./Components/pages/About";
import Contact from "./Components/pages/contactUs/Contact";
import Services from "./Components/pages/services/Services";
import { UserContext } from "./context/context";
import { useState } from "react";
import FirstHeade from "./Components/Project/Headers/FirstHeade";
import Layout from "./Components/Project/Layouts/Layout";
import Hero from "./Components/Project/Hero/Hero";
import Trust from "./Components/Project/Trust/Trust";
import Cart from "./Components/Project/Cart/Cart";


function App() {
  return (
    <>
      {/*   <Cars />
      <Events />
      <Lists />
      <Grocerry />
      <MyForm /> */}

      {/*  <UserContext.Provider value={name}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layouts />}>
              <Route
                index
                element={
                  localStorage.getItem("auth") ? (
                    <Home />
                  ) : (
                    <Navigate to="/register" />
                  )
                }
              />
              <Route
                path="about"
                element={
                  localStorage.getItem("auth") ? (
                    <About />
                  ) : (
                    <Navigate to="/register" />
                  )
                }
              />
              <Route
                path="services"
                element={
                  localStorage.getItem("auth") ? (
                    <Services />
                  ) : (
                    <Navigate to="/register" />
                  )
                }
              />
              <Route
                path="Contact-us"
                element={
                  localStorage.getItem("auth") ? (
                    <Contact />
                  ) : (
                    <Navigate to="/register" />
                  )
                }
              />
              <Route path="register" element={<MyForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider> */}
      <Layout />
      <Hero />
    <Trust />
    <Cart />
    </>
  );
}

export default App;
