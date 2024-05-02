import { UserContext } from "@/context/UserContext";
import axios from "axios";
import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

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
        "http://localhost:3001/auth/signin",
        {
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // Include credentials for cross-site requests
        }
      );

      if (response.status === 200) {
        console.log(response.data);
        setUserInfo(response.data); // Access data directly from response
        setRedirect(true);
      } else {
        alert("wrong credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
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
          className="border-2 border-[#fe7f6d] rounded-md py-2 px-2"
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
          className="border-2 border-[#fe7f6d] rounded-md py-2 px-2"
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}
      </div>

      <div>
        <button
          type="submit"
          className="bg-[#fe7f6d] text-white py-2 px-4 rounded-md w-full"
        >
          Connexion
        </button>
        <button
          type="submit"
          className=" text-[#fe7f6d] mt-4 py-2 px-4 rounded-md w-full border-2 border-[#fe7f6d]"
          onClick={() => navigate("/register")}
        >
          Créer un compte
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
