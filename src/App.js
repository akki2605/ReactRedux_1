import React from "react";
import Homepage from "./components/Homepage/Homepage";
import Specificbook from "./components/SpecificBook/Specificbook";
import Notfound from "./components/NotFound/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/specific_book" element={<Specificbook />} />
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
