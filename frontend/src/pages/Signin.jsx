import React, { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

export const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async () => {
    setLoading(true);
    try {
      const request = await axios.post("https://campuspay-svuh.onrender.com/api/v1/user/signin", {
        username,
        password
      });
      if (request.status === 200) {
        localStorage.setItem("token", request.data.token);
        localStorage.setItem("username", username);
        navigate("/dashboard");
      } else {
        alert("Wrong credentials");
      }
    } catch {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#0d0d18] h-screen flex justify-center items-center relative px-4">
      <button
        onClick={() => navigate('/')}
        className="absolute top-4 right-4 p-3 rounded-full bg-gradient-to-r from-[#7a5cff] to-[#9b6bff] text-white hover:from-[#9b6bff] hover:to-[#7a5cff] transition"
      >
        <FontAwesomeIcon icon={faHome} className="text-lg" />
      </button>
      <div className="flex flex-col justify-center bg-[#111122] p-8 rounded-2xl w-full max-w-md shadow-lg">
        <Heading label="Sign in" />
        <SubHeading label="Enter your credentials to access your account" />
        <InputBox
          placeholder="mitanshijain123@gmail.com"
          label="Email"
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputBox
          type="password"
          placeholder="123456"
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="pt-6">
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#9b6bff]"></div>
            </div>
          ) : (
            <Button label="Sign in" onClick={handleSignIn} />
          )}
        </div>
        <BottomWarning
          label="Don't have an account?"
          buttonText="Sign up"
          to="/signup"
        />
      </div>
    </div>
  );
};
