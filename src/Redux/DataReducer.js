import { DATA_FETCH_REQUEST, DATA_FETCH_REQUEST_ERROR, DATA_FETCH_REQUEST_SUCCESS } from "./actionTypes";

const init = {
	products : [],
	LoadingData : false,
	DataSuccess : false,
	DataError : false,
	word : ""
}

export const DataReducer = (state=init, {type,payload})=>{
	switch (type) {
		case DATA_FETCH_REQUEST:
			return {...state,products : [],LoadingData : true};
	
		case DATA_FETCH_REQUEST_SUCCESS:
			return {...state,LoadingData : false, DataSuccess : true , products: payload};

		case DATA_FETCH_REQUEST_ERROR:
			return {...state,LoadingData : false, DataError : true, products : []};
		
		case "SEARCHING_WORD":
			return {...state,word : payload};
		default:
			return state;
	}
}