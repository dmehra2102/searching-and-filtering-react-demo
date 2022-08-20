// Fetching Data Network request

import axios from "axios";
import { DATA_FETCH_REQUEST, DATA_FETCH_REQUEST_ERROR, DATA_FETCH_REQUEST_SUCCESS } from "./actionTypes"

export const Fetching_Data_Function = (category)=>(dispatch)=>{
	dispatch({type : DATA_FETCH_REQUEST});
	if(typeof category!== "function" && category!== "all"){
		axios.get(`https://dummyjson.com/products/category/${category}`)
		.then((res)=> {
			let timeout;
			clearTimeout(timeout);
			
			timeout = setTimeout(()=>{
				dispatch({type : DATA_FETCH_REQUEST_SUCCESS , payload : res.data.products})
			},1200)
		})
		.catch((error)=> dispatch({type : DATA_FETCH_REQUEST_ERROR , payload : error.message}))
	}
	else{
		axios.get("https://dummyjson.com/products?limit=70")
		.then((res)=> {
			let timeout;
			clearTimeout(timeout);
			
			timeout = setTimeout(()=>{
				dispatch({type : DATA_FETCH_REQUEST_SUCCESS , payload : res.data.products})
			},1200)
		})
		.catch((error)=> dispatch({type : DATA_FETCH_REQUEST_ERROR , payload : error.message}))
	}
}