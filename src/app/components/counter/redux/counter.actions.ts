import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment')
export const incrementTwo = createAction('[Counter Component] IncrementTwo')
export const shoppingCart = createAction('[Counter Component] ShoppingCart', props<{item: any}>())