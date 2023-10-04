import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<Greetings />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;