import React, { useContext, useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import NewProduct from "./components/NewProduct";
import Remove from "./components/Remove";
import Products from "./components/Products";
import Search from "./components/Search";
import About from "./Pages/About";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsOfService from "./Pages/TermsofService";
import ContactUs from "./Pages/ContactUs";
import UpdateProduct from "./components/updateProduct";
import Header from "./components/Header";
import { AuthContext } from "./Context/AuthProvider";
import Login from "./components/Auth/Login";
import { setLocalStorage } from "./utils/Localstorage";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // Set shopkeepers in localStorage once
  useEffect(() => {
    setLocalStorage();
  }, []);

  useEffect(() => {
    if (user && location.pathname === "/Login") {
      navigate("/");
    }
  }, [user, navigate, location.pathname]);

 /* useEffect(() => {
    if (authData) {
      const loggedInuser = localStorage.getItem("loggedInUser");
      if (loggedInuser) {
        setUser(loggedInuser.role);
      }
    }
  }, [authData]);

  */

  const handleLogin = (email, password) => {
    const shopkeeper = authData?.shopkeepers?.find(
      (e) => e.email === email && e.password === password
    );
    if (shopkeeper) {
      setUser(shopkeeper.email); // Store logged-in user
      setLoggedInUserData(shopkeeper);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "shopkeeper" })
      );
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <Header />
      {user && <Navbar />}

      <Routes>
      
        <Route path="/" element={<HomePage data={loggedInUserData} />} />
        <Route
          path="/Login"
          element={!user ? <Login handleLogin={handleLogin} /> : " "}
        />
        {user && <Route path="/NewProduct" element={<NewProduct />} />}
        <Route path="/Remove/:id" element={<Remove />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/update/:productId" element={<UpdateProduct />} />
        <Route path="/About" element={<About />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default App;
