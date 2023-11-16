import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainForm from "./Main_form";

function App() {
  return (
    // <Layout>
      <MainForm />
    // </Layout>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Main_form />} />
    //       <Route path="*" element={<Nopage />} />
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
  );
}
export default App;
