import axios from "axios"
import {useNavigate} from "react-router-dom"
export const GET_DATA = "GET_DATA"
export const DELETE_DATA = "DELETE_DATA"
export const ADD_DATA = "ADD_DATA"
export const UPDATE_DATA = "UPDATE_DATA"
export const SEARCH_DATA = "SEARCH_DATA"
export const FETCH_START = "FETCH_START"
export const SUCCESS_GET_DATA = "SUCCESS_GET_DATA"

//data menuju ke reducer
function fetchStart(){
    return {
        type: FETCH_START
    }
}

//data menuju ke reducer
function succesGetData(data){
    return{
        type: SUCCESS_GET_DATA,
        payload: data
    }
}

//data menuju ke reducer
function hapus(data){
    return {
        type: DELETE_DATA,
        payload: data
    }
}

//data menuju ke reducer
function updateData(data) {
    return {
        type: UPDATE_DATA,
        payload: data
    }
}

//data menuju ke reducer
function search_Data(data){
    return {
        type: SEARCH_DATA,
        payload: data
    }
}

//========================================================================================================================================
//Action untuk mengambil dan menampilkan semua data yang di API
export const getData = () => {
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.get("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran")
        dispatch(succesGetData(result.data))
    }
}

//Action yang digunakan untuk menghapus data yang ada di API
export const deleteData = (id) =>{
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.delete(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran/${id}`)
        dispatch(hapus(result.data))
        // dispatch(fetchStart)
    }
}

//Action untuk mengubah data diterima tidaknya menjadi relawan ke data yang ada di API
export const update_Data = (id) => {
    console.log(id);
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.put(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran/${id}`,
        {status: "accepted"})

        dispatch(updateData(result.data))
    }
}

//Untuk mencari data yang ada di table
export const searchData = (searchWord) => {
    return async (dispatch) => {
        dispatch(fetchStart())

        const result = await axios.get(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran`)
        let reultFix = result.data
        let filtered = reultFix.filter(function (item) {
            return (
                item.id_event.includes(searchWord) || item.name_event.includes(searchWord)
            )
        })
        dispatch(search_Data(filtered))
    }
}