import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Loader from "./Loader";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Initially not loading

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true); // Show loader before fetching

    let isValid = true;

    if (username === "") {
      setUsernameError("Username cannot be empty");
      isValid = false;
    } else {
      setEmailError("");
    }
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
        "https://capstone2-c1-chrisjustice600.onrender.com/auth/register",
        {
          username,
          email,
          password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log(response.data);
      setRedirect(true);
    } catch (error) {
      console.error("Registration error:", error);
      
    } finally {
      setIsLoading(false); // Set loading state to false after fetching or error
    }
  };
  if (redirect) {
    return <Navigate to={"/signin"} />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="username">Username</label>
        <input
          type="username"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="border rounded-md py-2 px-2"
        />
        {usernameError && <p className="text-red-500">{usernameError}</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border rounded-md py-2 px-2"
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
          className="border rounded-md py-2 px-2"
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
            Créer un compte
          </button>
        )}
      </div>
    </form>
  );
};

export default RegisterForm;
