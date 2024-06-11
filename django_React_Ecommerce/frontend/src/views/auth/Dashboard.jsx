import React from "react"

import { useAuthStore } from "../../store/auth.js"
import { Link } from 'react-router-dom'

function Dashboard() {

    const [isLoggedIn, setIsLoggedIn] = useAuthStore((state) => [
        state.isLoggedIn,
        state.user
    ])

    return (
        <>
            {isLoggedIn()
                ? <div>
                    <h1>Dashboard</h1>
                    <Link to={'/Logout'}>Logout</Link>
                </div>
                : <div>
                    <h1>Home Page</h1>
                    <div className="d-flex">
                        <Link className='btn btn-primary ' to={'/register'}>Register</Link>
                        <br/>
                        <Link className='btn btn-success ms-4' to={'/login'}>Login</Link>
                    </div>
                </div>
            }


        </>
    )
}

export default Dashboard