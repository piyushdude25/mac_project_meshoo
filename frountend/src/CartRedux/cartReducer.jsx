// import axios from "axios";
// import { useEffect } from "react";
// import { ADD_CART } from "./action";
// import { DELETE_CART } from "./action";
// import {TOTAL_PRICE} from './action'
// import {TOTAL_ITEMS} from './action'
// import {TOTAL_DISCOUNT} from './action'


// import { INC_PRICE_QUANTITY } from "./action";

// const init = {
//   count: 0,
//   price: 0,
//   cartproduct: [],
//   totalDiscount : 0,
// };
// export const cartReducer = (state = init, { type, payload }) => {
//   switch (type) {
//     case ADD_CART:
    
//       const check = state.cartproduct.find((pr) => pr.id === payload.id);
//       if (check) {
//         return {
//           ...state,
          

//           cartproduct: [...state.cartproduct],
//         };
//       } else {
//         return {
//           ...state,
//           count:state.count+1,

//           cartproduct: [...state.cartproduct, payload],
//         };
//       }
      
//     case TOTAL_ITEMS:
//       return {
//         ...state,
//         count:state.count+payload,
//         price: +state.price + +payload.price,
//         discount: +state.discount + +payload.discount,
//       };

//     case DELETE_CART:
//       console.log("payload", payload);
//       const newlist = state.cartproduct.filter((x) => {
//         console.log("payload", x);

//         return x.id !== payload.id;
//       });
//       console.log("newlist", newlist);
//       return {
//         ...state,
//         count:state.count-1,
//         cartproduct: [...newlist],
//       };

//       case TOTAL_PRICE:
//         return {
//           ...state,price:payload
//         }

//         case TOTAL_DISCOUNT:
//           return {
//             ...state,totalDiscount:payload
//           }

        
        


//     default:
//       return state;
//   }
// };
