import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPING_ADDRESS } from '../constants/cartConstants.js'
import { PRODUCT_DETAILS_REQUEST, PRODUCT_LIST_REQUEST } from '../constants/productConstants.js'

export const cartReducer = ( 
    state = { cartItems: [], shippingAddress: {} }, action) => {
        //console.log(`action.type line on 6 = ${action.type}`)
    switch(action.type){
        case CART_ADD_ITEM:
            //console.log(`CART_ADD_ITEM 3333 = ${action.type}`)
            
            const item = action.payload

            const existItem = state.cartItems.find( (x) => x.product === item.product)

            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map ((x) => 
                        x.product === existItem.product ? item : x
                    ),
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item],
                }
            } 
        case CART_REMOVE_ITEM:
           return {
                ...state,
                cartItems: state.cartItems.filter((x) => x.product !==action.payload),
           } 
        case CART_SAVE_SHIPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload,
            } 
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload,
            } 
        default:
            return state
    }
}