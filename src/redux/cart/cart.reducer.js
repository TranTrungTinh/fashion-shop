import CartActionTypes from './cart.types';
import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  if(type === CartActionTypes.TOGGLE_CART_HIDDEN) {
    return { ...state, hidden: !state.hidden };
  }
  if(type === CartActionTypes.ADD_ITEM) {
    return { ...state, cartItems: addItemToCart(state.cartItems, payload) };
  }
  if(type === CartActionTypes.REMOVE_ITEM) {
    return { ...state, cartItems: removeItemFromCart(state.cartItems, payload) };
  }
  if(type === CartActionTypes.CLEAR_ITEM_FROM_CART) {
    return { 
      ...state,
      cartItems: state.cartItems.filter(
        cartItem => cartItem.id !== payload.id
      )
    };
  }
  return state;
};

export default cartReducer;