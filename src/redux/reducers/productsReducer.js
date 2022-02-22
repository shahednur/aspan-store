import { Types } from '../constants/types';

const initialsState = {
    products: [],
}

export const productsReducer = (state = initialsState, action) => {
    switch (action.type) {
        case Types.SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
      case Types.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case Types.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };

  export const cartReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case Types.ADD_TO_CART:
        return { ...state, ...payload };
      case Types.UPDATE_CART:
        return { ...state, ...payload };
      case Types.REMOVE_ITEM:
        return { ...state, ...payload };
      case Types.UPDATE_QUANTITY:
        return { ...state, ...payload };
      default:
        return state;
    }
  }