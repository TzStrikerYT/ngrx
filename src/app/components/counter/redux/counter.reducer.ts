import { createReducer, on } from "@ngrx/store";
import { count } from "rxjs";
//acciones
import { increment, incrementTwo, shoppingCart } from "./counter.actions";

export const initialState = {
    counter: 0,
    shoppingCart: []
}

// Reducer
export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => add(state, 1)),
    on(incrementTwo, (state) => add(state, 2)),
    on(shoppingCart, (state, item) => addProduct(state, item))
)
// function

function add(state: any, cant: number = 0){
    console.log({...state, counter: state.counter + 1 || 0})
    return {...state, counter: state.counter + cant || 0}
}

function addProduct(state: any, product: any){
    console.log(state)
    return {...state, shoppingCart: [...state.shoppingCart, product.item]}
}