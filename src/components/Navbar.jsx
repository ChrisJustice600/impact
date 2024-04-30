import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    // -----NAVBAR DESKTOP----------
    <nav className="navbar">
      <div className="display-nav">
        <div>Logo</div>
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
            <span>Recherche cagnotte</span>
          </div>
          <button
            className="btn-connexion btn-hover"
            onClick={() => navigate("/signin")}
          >
            Se connecté
          </button>
          <button className="btn-cagnotte ">Créer une cagnotte</button>
        </div>
      </div>
    </nav>
  );
}
