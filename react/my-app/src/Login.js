import React, { useState } from 'react'; // Added useState import
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Prods from './Prods';

const Login = () => {
  const myServer = 'http://127.0.0.1:8000/login';
  const [userName, setUserName] = useState(''); // Changed setuserName to setUserName
  const [password, setPassword] = useState(''); // Changed setpassword to setPassword
  const [logged, setLogged] = useState(false); // Changed setlogged to setLogged

  const doLogin = () => {
    axios.post(myServer, { username: userName, password: password }).then((response) => {
      localStorage.setItem('token', response.data.access);
      setLogged(true); // Changed logged to setLogged
    });
  };

  const doLogout = () => {
    setLogged(false); // Changed logged to setLogged
  };

  return (
    <div>
      Login
      {logged && 
      <><button onClick={() => doLogout()}>Logout</button>
      <Prods></Prods>
      </>}
      
      {!logged && (
        <div>
          userName: <input onChange={(e) => setUserName(e.target.value)} />
          password: <input type="password" onChange={(e) => setPassword(e.target.value)} />
          <button onClick={() => doLogin()}>Login</button>

        </div>
      )}
      <Outlet></Outlet>
    </div>
  );
};

export default Login;
