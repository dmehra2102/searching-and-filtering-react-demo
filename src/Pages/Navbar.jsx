import React from 'react';
import {Link} from "react-router-dom";
import "../styles/navbar.css";
import SearchingPage from './SearchingPage';

const Navbar = () => {
  return (
	<div>
		<nav className='navbar'>
			<Link className='link-tag' key={"9128398"} to={"/"}>Products</Link>
			<Link className='link-tag' key={"32328398"} to={"/login"}>Login</Link>
			<Link className='link-tag' key={"8128448"} to={"/register"}>Register</Link>
			<SearchingPage />
		</nav>
	</div>
  )
}

export default Navbar