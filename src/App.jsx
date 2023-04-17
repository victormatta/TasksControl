import "./Style/App.css";
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/Card/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Home />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
