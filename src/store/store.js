import {createStore} from 'redux';
import data from '../books.json'

export const reducer = (initialState = {allBooks: {}},action)=>{
    switch(action.type){
        case "readBook":
            return {allBooks: data}
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




// const isbn = store.getState().allBooks.listIsbn[2];
// const unsubscribe = store.subscribe(()=>{console.log("action taken place ",store.getState())})
// unsubscribe()
// const rootReducer = combineReducers({
//     home:homeReducer,
//     update:updateReducer
// })