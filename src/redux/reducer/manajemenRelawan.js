import {FETCH_START, SUCCESS_GET_DATA, ADD_DATA, DELETE_DATA, UPDATE_DATA, SEARCH_DATA} from "../action/manajemenRelawanAction"

const initialState = {
    relawanPendaftar: [{}],
    isLoading: false
}

const manajemenRelawan = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                isLoading: true
            }
        case SUCCESS_GET_DATA:
            return {
               ...state,
               relawanPendaftar: action.payload,
               isLoading: false 
            }
        case DELETE_DATA:
            return {
                ...state,
                isLoading: false
            }
        case UPDATE_DATA:
            return {
                ...state,
                isLoading: false
            }
        case SEARCH_DATA:
            return {
                ...state,
                relawanPendaftar: action.payload,
                isLoading: false
            } 
        default: 
        return state
    }
}

export default manajemenRelawan