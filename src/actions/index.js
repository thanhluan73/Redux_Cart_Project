import * as Types from './../constants/ActionType';

export const AddToCart = (product, quantity) => {
    return {
        type : Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const ChangeMessage = (message) => {
    return {
        type : Types.CHANGE_MESSAGE,
        message
    }
}

export const DeleteProduct = (product) => {
    return {
        type : Types.DELETE_PRODUCT,
        product
    }
}

export const UpdateProductInCart = (product, quantity) => {
    return {
        type : Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}