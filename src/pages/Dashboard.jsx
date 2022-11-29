import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import '../styles/dashboardStyle.css'

function Dashboard() {
    useEffect(() => {
        document.title = "Dasboard"
    })
    return(
        <>
        <div className="d-flex">
            <Sidebar/>
            <div className="kegiatan container ms-5">
                <div className="kegiatan-row row row-cols-1 row-cols-md-3 g-4 mt-5">

                    {/* tampilin banyaknya pengguna web */}
                    <div className="kegiatan-col col">
                        <div className="kegiatan-card card">
                            <img src="/images/users.png"alt="list foto 1" className="card-img-top"/>
                            <div className="kegiatan-card-body card-body">
                                <h5 className="card-title">Pengguna:</h5>
                                <h5 className="card-text"> <i className="fad fa-users me-3"></i>10 orang</h5>
                                <a href="/user" type="button" className="btn">Go Detail <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* tampilin banyak lowongan relawan yang ada di web */}
                    <div className="kegiatan-col col">
                        <div className="kegiatan-card card">
                            <img src="/images/list.png"alt="list foto 1" className="card-img-top"/>
                            <div className="kegiatan-card-body card-body">
                                <h5 className="card-title">List Open Relawan:</h5>
                                <h5 className="card-text"><i className="fad fa-hands-helping me-3"></i>8 items</h5>
                                <a href="/list-relawan" type="button" className="btn">Go Detail <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                    {/* tampilin banyak pendaftar yang telah mendaftar */}
                    <div className="kegiatan-col col">
                        <div className="kegiatan-card card">
                            <img src="/images/form.png"alt="list foto 1" className="card-img-top"/>
                            <div className="kegiatan-card-body card-body">
                                <h5 className="card-title">Pendaftar:</h5>
                                <h5 className="card-text"><i className="fad fa-tasks me-3"></i>100 orang</h5>
                                <a href="/relawan" type="button" className="btn">Go Detail <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>    
        </>
    )
}

export default Dashboard