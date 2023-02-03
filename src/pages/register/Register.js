import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./register.scss";

const Register = () => {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  // const emailRef = useRef()
  // const passwordRef = useRef()

  // const handleStart = () =>{
  //   setEmail(emailRef.current.value)
  // }

  // const handleFinish = () =>{
  //   setPassword(passwordRef.current.value)
  // }

  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ username: "Jane", password: "testpassword" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
    }
    console.log(username,password);
    navigate("/login");
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm"
            alt=""
          />
          <button className="loginbutton">Sign In</button>
        </div>
      </div>
      <div className="container">
        <h1>Unlimited movies, TV shows, and more</h1>
        <h2>watch anyware. Cancel anytime</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
          <div >
            <form className="input"  onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              required
              value={username}
              onChange={(e) => setusername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setpassword(e.target.value)}
            />
            <button className="registerButton"  type="submit" value="sign in">
              Start
            </button>
          </form>
          </div>
      </div>
    </div>
  );
};

export default Register;
