import './login.scss'
import { useState } from "react";
import { useNavigate } from "react-router";


const Login = () => {

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
    navigate("/home");
  };

  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
        <img
        className='logo' 
        src='https://play-lh.googleusercontent.com/0rgPYj0GwZ6txpYZrzoMdhwzqg7vY6C9B-Ol7jlaz-Ox2rgpD4Tr82ZgDqkirrEohbGm'
        alt=''
        />
      </div>
      </div>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <input placeholder='email address' type="text"
              required
              value={username}
              onChange={(e) => setusername(e.target.value)}/>
          <input placeholder='password' type="password"
              name="Password"
              required
              onChange={(e) => setpassword(e.target.value)}/>
          <button className='loginButton'
             type='submit'value="sign in">Sign In</button>
          <span>New to Netflix?<b>Sign up now</b></span>
        </form>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a 
          bot.<b>Learn more</b>
        </small>
      </div>
    </div>
  );
}

export default Login
