import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/ManageStyle.css'
import {useDispatch, useSelector} from 'react-redux'
import { deleteData, getData, update_Data, searchData } from '../redux/action/manajemenRelawanAction'
import Clock from "../components/Clock"
import Hari from "../components/Hari"

function ManageVolunteer () {

    const dispatch = useDispatch()
    const [dataRelawan, setDataRelawan] = useState("")
    const [statusActive, setStatusActive] = useState("")
    const [inputData, setInputData] = useState("")
    const {relawanPendaftar, isLoading} = useSelector((state) => state.dataRelawan)

    //Fungsi untuk menghapus data
    const delete_Data = (id) =>{
        let text = "Apakah anda yakin untuk menghapusnya?"
        if (confirm(text) == true) {
            dispatch(deleteData(id))
        }else{
            alert("Action Cenceled")
        }
    }

    //fungsi untuk melakukan update data
    const handleSaveEdit = (id) => {
        dispatch(update_Data(id, statusActive))
        alert("data berhasil di update")
    }
    
    //fungsi untuk melakukan pencarian data
    const handleSearch = (e) => {
        e.preventDefault()
        let data = inputData.toLowerCase()
        dispatch(searchData(data))
    }

    //Menampilkan semua data
    useEffect(() => {
        document.title = "Manajemen Relawan"
        dispatch(getData())
    },[])

    return(
        <>
        <div className='d-flex'>
            <Sidebar/>
            <div id='group'>
            <nav className="search-nav navbar navbar-light">
                <div className="menage container-fluid">
                    <ul className="data-tanggal navbar-nav me-auto mb-2 ms-2 mb-lg-0">
                        <li className="nav-item"><Hari></Hari></li>
                        <li className="nav-item"><Clock></Clock></li>
                    </ul>
                    <form className="d-flex" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="manage-table container mt-5">
                <div className="table-card card flex-grow-1 container-p-y">
                    <h5 className="card-header">Data Pendaftar Relawan</h5>
                    <div className="table-card-body card-body">
                        <div className="table-responsive">
                            <table id="data-table" className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">ID Event</th>
                                        <th scope="col">Name Event</th>
                                        <th scope="col">Link Document</th>
                                        <th scope="col">No. Handphone</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Reason</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>  
                                    </tr>
                                    
                                </thead>
                                <tbody className="row-data">
                                    {isLoading ?(
                                            <tr>
                                                <td className='loader'></td>
                                            </tr>
                                        ) : (
                                            relawanPendaftar.map((item, index) => 
                                                <tr key={index}>
                                                    <th>{item.id}</th>
                                                    <td>{item.nama}</td>
                                                    <td>{item.id_event}</td>
                                                    <td className="text-wrap">{item.name_event}</td>
                                                    <td className="text-wrap">
                                                        Link ID Card: {item.link_IDCard}
                                                        <br/>
                                                        Link Student Card: {item.link_studentCard}
                                                        <br/>
                                                        Link Cv: {item.link_cv}
                                                        <br/>
                                                        Link Health Letter: {item.link_HealthLetter}
                                                    </td>
                                                    <td>{item.nomor_telepon}</td>
                                                    <td>{item.email}</td>
                                                    <td className="text-wrap">{item.reason}</td>
                                                    <td id="show-status">
                                                        {item.status}
                                                    </td>
                                                    <td >
                                                        <input className="btn btn-warning mb-3" type="button" value="Edit" onClick={() => handleSaveEdit(item.id)}/>
                                                        <input className="btn btn-danger" type="button" value="Delete" onClick={() => delete_Data(item.id)}/>
                                                    </td>
                                                </tr>
                                            )
                                        )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>   
    </div>    
    </>
    )
}

export default ManageVolunteer