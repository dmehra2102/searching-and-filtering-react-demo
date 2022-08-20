import React from 'react'
import { useDispatch } from 'react-redux';
import "../styles/navbar.css";

const SearchingPage = () => {
	const dispatch  = useDispatch();
	const handleChange = (e)=> {
		dispatch({type : "SEARCHING_WORD",payload : e.target.value});
	}
  return (
	<div className='input-div'>
		<input type="text"  placeholder='search your item'onChange={handleChange}/>
	</div>
  )
}

export default SearchingPage