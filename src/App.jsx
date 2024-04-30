import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Connexion from "./pages/Connexion";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/connexion" element={<Connexion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
