import { useState } from "react";

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

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border rounded-md py-2 px-20"
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
          className="border rounded-md py-2 px-20"
        />
        {passwordError && <p className="text-red-500">{passwordError}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
