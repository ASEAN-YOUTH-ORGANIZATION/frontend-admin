import '../styles/SidebarStyle.css'

function Sidebar() {
    return(
        <>
        <div>
            <div className="sidebar d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" id='sidebar'>
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <img src="/images/logo.png" alt="logo iGreen" className="bi me-2"/>
                </a>
                <hr/>
                <ul className="sidebar-nav nav nav-pills flex-column mb-auto">
                    <li>
                        <a href="/dashboard" className="nav-link text-white">
                            <i className="fad fa-tachometer-alt-fast bi me-2"></i>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="/user" className="nav-link text-white">
                            <i className="fad fa-users bi me-2"></i>
                            Manajemen User
                        </a>
                    </li>
                    <li>
                        <a href="/list-relawan" className="nav-link text-white">
                            <i className="fad fa-hands-helping bi me-2"></i>
                            Manajemen List Relawan
                        </a>
                    </li>
                    <li>
                        <a href="/relawan" className="nav-link text-white">
                            <i className="fad fa-tasks bi me-2"></i>
                            Manajemen Volunteer
                        </a>
                    </li>
                </ul>
                <hr/>
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width={"32"} height={"32"} className="rounded-circle me-2"/>
                        <strong>mdo</strong>
                    </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
    </div>    
    </>
        
    )
}

export default Sidebar
