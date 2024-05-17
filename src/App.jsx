import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
// import Connexion from "./pages/Connexion";
import { UserContextProvider } from "./context/UserContext";
import CreateProject from "./pages/CreateProject";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Research from "./pages/Research";
import Signin from "./pages/Signin";
import SinglePage from "./pages/SinglePage";

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/research" element={<Research />} />
            <Route path="/create-project" element={<CreateProject />} />
            <Route path="/campagn/:id" element={<SinglePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
