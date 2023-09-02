import "./App.css";
import { Routes, Route } from "react-router-dom";
// importing component
import { Home, Launchpad } from "./pages";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launchpad" element={<Launchpad />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
