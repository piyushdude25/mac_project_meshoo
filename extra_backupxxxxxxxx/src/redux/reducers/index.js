import {combineReducers} from 'redux'
import { productReducer} from './productsReducer'
import {  selectedProductReducer} from './selectedProductReducer'
import {  cartReducer} from './cartReducer'
// import { cartReducer } from "../../CartRedux/cartReducer"

// import {incdirReDucer} from './productsReducer'

// import { productReducer,selectedProductReducer,cartReducer} from './productsReducer'

 const reducers = combineReducers({
    allProducts: productReducer,
    product: selectedProductReducer,
    cartReducer:cartReducer,
    // incdirReDucer:incdirReDucer,

})
export default reducers