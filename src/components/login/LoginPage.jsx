
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event) =>{
    event.preventDefault();
    const success = await fakeLogin(userName, password);

    if(success) {
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  }


  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        autoComplete="true"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="true"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
};

const fakeLogin = async (userName, password) => {
  return userName === 'user' && password === 'password';
}

export default LoginPage;