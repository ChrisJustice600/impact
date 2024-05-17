import axios from "axios";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/images/logo.png";
import { UserContext } from "../context/UserContext";
import Avatar from "./Avatar";

export default function Navbar() {
  const navigate = useNavigate();
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/users/profile",
          {
            withCredentials: true, // Include cookies for authentication
          }
        );
        // setUserInfo(response.data);
        console.log(response.data);
        setUserInfo(response.data);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchData();
  }, []);
  async function logout() {
    try {
      await axios.post(
        "http://localhost:3001/auth/logout",
        {},
        {
          withCredentials: true,
        }
      );
      setUserInfo(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }

  const username = userInfo?.username;
  const initext = (username) => {
    if (!username || typeof username !== "string") {
      return ""; // Handle invalid username input
    }
    return username[0].toUpperCase(); // Get and uppercase the first letter
  };
  const initextreturn = initext(username);
  console.log(initextreturn);

  return (
    // -----NAVBAR DESKTOP----------
    <nav className="navbar">
      <div className="display-nav">
        <div>
          <Link to="/home">
            <img className="h-12" src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="navlink">
          <div className="search btn-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <span onClick={() => navigate("/research")}>
              Recherche cagnotte
            </span>
          </div>
          {initextreturn && <Avatar user={initextreturn} logout={logout} />}
          {!initextreturn && (
            <button
              className="btn-connexion btn-hover"
              onClick={() => navigate("/signin")}
            >
              Se connecté
            </button>
          )}
          <button
            className="btn-cagnotte"
            onClick={() => navigate("/Create-project")}
          >
            Créer une cagnotte
          </button>
        </div>
      </div>
    </nav>
  );
}
