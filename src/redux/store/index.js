import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import manajemenRelawan from "../reducer/manajemenRelawan"

const allReducer = combineReducers({
    dataRelawan: manajemenRelawan
})

const store = createStore(allReducer, applyMiddleware(thunk))

export default store