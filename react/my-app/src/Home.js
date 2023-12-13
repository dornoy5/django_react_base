import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Prods from './Prods'
import Login from './Login';

const Home = (props) => {
  const [logged, setlogged] = useState(false)
    console.log("dor");
  return (
    <div>Home<br />
        <Link to='/prods' onClick={<Prods/>}>prods</Link>{" | "}
        <Link to='/' onClick={<Home/>}>Home</Link>{" | "}
        <Link to='/login' onClick={<Login/>}>Login</Link>{" | "}
        <Outlet/>
    </div>
  )
}

export default Home