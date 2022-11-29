import Sidebar from "../components/Sidebar"
import '../styles/ManageStyle.css'
import { useEffect } from "react"
import Clock from "../components/Clock"
import Hari from "../components/Hari"

function ManageUser() {

    useEffect(() => {
        document.title = "Manajemen User"
    })
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
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <div className="manage-table container mt-5">
                <div className="table-card card flex-grow-1 container-p-y">
                    <h5 className="card-header">Data User</h5>
                    <div className="table-card-body card-body">
                        <div className="table-responsive">
                            <table id="data-table" className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">ID User</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Password</th>
                                        <th scope="col">Keterangan</th>
                                        <th scope="col">Action</th>  
                                    </tr>
                                    
                                </thead>
                                
                                {/* nampilin data disini yah  */}
                                <tbody className="row-data">
                                    <tr>
                                        <th></th>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>
                                            <input className="btn btn-warning me-3" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" value="Edit"/>
                                            <input className="btn btn-danger" type="button" value="Delete"/>
                                        </td>
                                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog">
                                                <div className="modal-content">
                                                    <div className="modal-header bg-warning">
                                                        <h5 className="modal-title" id="exampleModalLabel">Edit Data</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                    </div>
                                                    <div className="modal-body">
                                                        <input type="text" className="form-control mb-3" placeholder="Ubah Username" required/>
                                                        <input type="text" className="form-control mb-3" placeholder="Ubah Email" required/>
                                                        <select class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
                                                            <option selected>Ubah Gender</option>
                                                            <option value="1">Male</option>
                                                            <option value="2">Female</option>
                                                        </select>
                                                        <input type="password" className="form-control mb-3" placeholder="Ubah Password" required/>
                                                        <select class="form-select form-select-sm" aria-label=".form-select-sm example">
                                                            <option selected>Ubah Organisasi</option>
                                                            <option value="1">LSM</option>
                                                            <option value="2">Non LSM</option>
                                                        </select>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                        <button type="button" className="btn btn-success">Save changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </tr>
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

export default ManageUser
