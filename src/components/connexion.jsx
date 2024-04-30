import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
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
  };
  const navigate = useNavigate();

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
