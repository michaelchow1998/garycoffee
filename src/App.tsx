import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LoginPage />} path={"/"}></Route>
      </Routes>
    </Router>
  );
}

export default App;
