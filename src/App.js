import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainForm from "./Main_form";
import Layout from "./Layout";
import Nopage from "./Nopage";
import OpForm from "./OpForm";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainForm />} />
          <Route path="/opform" element={<OpForm/>} />
          <Route path="*" element={<Nopage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
