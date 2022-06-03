import {ActionTypes} from '../constants/action-types'

const initialState = {
    products: [],
    count : 0
}

export const productReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload};

        case ActionTypes.FETCH_PRODUCTS:
            return { ...state, products: payload};

        default: 
            return state;
    }
}




///cart deducer///

  


// XXXXXXXXXXXXXXXXXXXXXXXX
// const initialState = {
//     count : 0
//   }
  
// export const incdirReDucer = (state = initialState,action) => {
//     switch(action.type){
//         case "INCREMENT":
//           return {count: state.count + 1}
//         case "DECREMENT":
//           return {count: state.count -1}
//         default: 
//           return state
//     }
//   }
 