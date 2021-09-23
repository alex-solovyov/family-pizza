import { combineReducers } from "redux";
import { pizzas } from './pizzas'
import { sorts } from './sorts'
import { categories } from './categories'
import { cart } from "./cart";

export const rootReducer = combineReducers({pizzas, categories, sorts, cart})