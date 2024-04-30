import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
// import Connexion from "./pages/Connexion";
import { UserContextProvider } from "./context/UserContextComponent";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Signin from "./pages/Signin";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            {/* <Route path="/connexion" element={<Connexion />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
