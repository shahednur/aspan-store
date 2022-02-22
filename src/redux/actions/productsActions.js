import { Types } from '../constants/types';

export const setProducts = (products) => {
    return {
        type: Types.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: Types.SELECTED_PRODUCT,
        payload: product
    }
}

export const removeSelectedProduct = () => {
    return {
        type: Types.REMOVE_SELECTED_PRODUCT,
    }
}

export const addToCart = (product) => {
    return {
        type: Types.ADD_TO_CART,
        payload: product
    }
}

export const updateCart = (product) => {
    return {
        type: Types.UPDATE_CART,
        payload: product
    }
}

export const removeItem = (product) => {
    return {
        type: Types.REMOVE_ITEM,
        payload: product
    }
}

export const updateQuantity = (product) => {
    return {
        type: Types.UPDATE_QUANTITY,
        payload: product
    }
}