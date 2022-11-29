import '../styles/LoginStyle.css'
import {useRef, useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login(){
    const navigation = useNavigate() 

    const [admin, setAdmin] = useState("")
    const [pwd, setPwd] = useState("")
    const [data, setData] = useState({})

    let alertLogin = document.querySelector(".warning")

    useEffect(() => {
        axios.get("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/login_and_regis")
        .then((result) => {
            setData(result.data)
        })
    },[])

    function handleSubmit (e) {
        e.preventDefault()
        console.log(data);
        data.filter((item) => item.username === admin).map((el) => {
            if (el.username == admin && el.password == pwd) {
                navigation(`/dashboard`)
            }else{
                navigation("/")
                alertLogin.innerHTML = 
                `<div class="alert alert-danger" role="alert">
                    Username dan password anda salah!
                </div>`
            }
        })
    }

    return(
        <>
        <div className="container">
        <section className="login d-flex">
            <div className="login-left w-50">
                <div className="row justify-content-center align-items-center h-100">
                    <div className="col-6">
                        <div className="header">
                            <h1>Login</h1>
                            <p>Enter your Username and Password</p>
                            <div className="warning">
                                
                            </div>
                        </div>

                        <form className="loginForm" onSubmit={handleSubmit}>
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="username" placeholder="Enter your username" required value={admin} onChange={(e) => setAdmin(e.target.value)}/>

                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Enter your password" required value={pwd} onChange={(e) => setPwd(e.target.value)}/>

                            <a href="#" className="text-decoration-none">Forgot your password?</a>

                            <button className="signin" type="submit">Sign in</button>
                            <button className="signin-google">
                                <img src="images/google.png" alt="" width={"16px"} height={"16px"}/> Continue with Google
                            </button>

                            <span className="d-inline">Don’t have any account? <a href="#" className="d-inline text-decoration-none">Sign up </a>here!</span>
                        </form>
                    </div>
                </div>
            </div>
            <div className="login-right w-50">
                <img src="/images/plant-tree.jpg"/>
            </div>  
        </section>
    </div>
        </>
    )
}

export default Login