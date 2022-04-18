import {createStore} from 'redux';
import data from '../books.json'
var initialState = {allBooks: {}};

export const reducer = (state=initialState,action)=>{
    
    switch(action.type){
        case "readBook":
            return {
                ...state,
                allBooks: data
            }
        case "updateBook":
            return{
                ...state,
                allBooks:action.payload.data
            }
        default:
            return state;
    }
}

const store = createStore(reducer , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.dispatch({
        type : "readBook"
})

// console.log(store.getState().allBooks.books)

export default store
