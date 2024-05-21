import { UserContext } from "@/context/UserContext";
import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { toast } from "sonner";
import Loader from "./Loader";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    let isValid = true;

    if (email === "") {
      setEmailError("Email cannot be empty");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (password === "") {
      setPasswordError("Password cannot be empty");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      // Submit form data to your backend or perform other actions
      console.log("Email:", email);
      console.log("Password:", password);
    }
    try {
      const response = await axios.post(
        "https://capstone2-c1-chrisjustice600.onrender.com/auth/signin",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          // withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        setUserInfo(response.data);

        toast("Connexion réussie", {
          description: "Vous êtes maintenant connecté",
          action: {
            label: "X",
            onClick: () => console.log("Toast fermé"),
          },
        });

        setTimeout(() => {
          setRedirect(true);
        }, 2000);
      } else {
        alert("wrong credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  };
  if (redirect) {
    return <Navigate to={"/home"} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="focus:outline-blue-500 border-2 border-[#fe7f6d] rounded-md py-2 px-2"
        />
        {emailError && <p className="text-red-500">{emailError}</p>}
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="focus:outline-blue-500 border-2 border-[#fe7f6d] rounded-md py-2 px-2"
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}
      </div>

      <div>
        {isLoading ? (
          <button className="border border-[#fe7f6d] rounded-md py-2 px-[158px] text-[#fe7f6d] bg-[#ffffff]">
            <Loader />
          </button>
        ) : (
          <button
            type="submit"
            className="bg-[#fe7f6d] text-white mt-4 py-2 px-4 rounded-md w-full"
          >
            Connexion
          </button>
        )}
        <Link to="/register">
          <div className="flex justify-center items-center text-[#fe7f6d] mt-4 py-2 px-4 rounded-md w-full border-2 border-[#fe7f6d]">
            Créer un compte
          </div>
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
