import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} path={"/"}></Route>
        <Route element={<Dashboard />} path={"/dashboard"}></Route>
      </Routes>
    </Router>
  );
}

export default App;
