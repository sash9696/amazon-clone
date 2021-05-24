export const initialState = {
    basket:[{
        id:"12321341",
        title:"The Psychology of Money",
        price:11.96,
        rating:5,
        image:"https://m.media-amazon.com/images/I/51jRBz6Ug3L.jpg"
        
    }], 
    user:null,
};
export const getBasketTotal =(basket)=>
basket?.reduce((amount, item) =>item.price + amount ,0 );

function reducer(state, action){
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //logic
            return {
              ...state,
              basket: [...state.basket, action.item]  
            };
            break;
        case 'REMOVE_FROM_BASKET':
            //logic
            //cloned the basket
            let newBasket =[...state.basket];
            //check if product exists
            const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
            
            if (index >=0){
               //if item exists remove it
                newBasket.splice(index,1);

            } else{
                console.warn()
                ;
            }
            return {...state, basket: newBasket};

            break;
        default:
            return state;
    }
}

export default reducer;