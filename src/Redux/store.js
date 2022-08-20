import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { DataReducer } from "./DataReducer";

const rootReducer = combineReducers({
	DataReducer
})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))