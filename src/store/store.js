import {createStore} from 'redux';
import data from '../books.json'

export const reducer = (initialState = {allBooks: {}},action)=>{
    switch(action.type){
        case "readBook":
            return {
                allBooks: data
            }
        case "updateBook":
            return{
                allBooks:action.payload.data
            }
        default:
            return initialState
    }
}

const store = createStore(reducer);

store.dispatch({
        type : "readBook"
})

console.log(store.getState().allBooks.books)

export default store
