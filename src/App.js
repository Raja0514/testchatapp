import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";
import Home from "./Pages/Home"
import Chat1 from "./Pages/Chat1";
import PrivateRoutes from "./utils/PrivateRoutes";
function App() {
  return (
    <>
      <Menu />

      <Routes>

        <Route element={<PrivateRoutes />}>

          <Route path="/chat" element={<Chat />}  />
          <Route path="/home" element={<Home />}  />

        
        </Route>

        <Route path="/register" element={<Register />} exact />
        <Route path="/login" element={<Login />} exact/>
        <Route path="/home" element={<Home />}  exact/>
        <Route path="/chat" element={<Chat />} exact/>
        <Route path="/" element={<Chat1/>} exact/>
        
        
      </Routes>
    </>
  );
}

export default App;
