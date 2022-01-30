const initialState = {
  products: [],
  cart: [],
  price: 0,
};



const Reducer = (state = initialState, action) =>{
    switch(action.type){
        case "SetProductList":  
            return {...state, products : action.payload};

        case "AddToCart":
           state.price = state.price + action.payload.price;
                return {...state, cart : [...state.cart, state.products.find(product => product.id === action.payload.id)]}
          
       
                
        case "PlusItem":
            action.payload.units += 1 
            return {
                ...state, price : state.price + action.payload.price
            }
        
        case "MinusItem":
            if(action.payload.units > 0){
                action.payload.units -= 1; 
                return {
                  ...state,
                  price: state.price - action.payload.price,
                };
            } else {
                return {
                  ...state,
                  cart: state.cart.filter(
                    (item) => item.id !== action.payload.id
                  ),
                }; 
            }
               
            
        case "DeleteItem":
            state.price -= action.payload.price * action.payload.units;
            action.payload.units = 1;
            return {
                ...state, 
                cart : state.cart.filter((item) => item.id !== action.payload.id),
            };
            
        case "Checkout":
            state.products.forEach((element) => {
              element.units = 1;
            });
            return {
                ...state, cart : [], price:0
            }    
          
        default:
            return state;
            
    }
}

export default Reducer;

/**
 *    return {...state, cart : [...state.cart, state.products.find(product => product.id === action.payload)]}
            

 */