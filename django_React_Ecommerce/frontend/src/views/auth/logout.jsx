import React, {useEffect} from "react"
import { logout } from "../../utils/auth.js";
import { Link } from 'react-router-dom'

function Logout() {
    useEffect(() => {
        logout()
    }, [])
    return (
        <div>
            <section>
                <main className="" style={{marginBottom: 100, marginTop: 50}}>
                    <div className="container">
                        {/* Section: Login form */}
                        <section className="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-5 col-md-8">
                                    <div className="card rounded-5">
                                        <div className="card-body p-4 text-center">
                                            <h3 className="text-center">You have been logged<br/> out successfully.</h3>
                                            <br/>
                                            <Link to={'/register'} className="btn btn-primary">Register<i className='fas fa-user-plus'></i> </Link>
                                            <Link to={'/login'} className="btn btn-info ms-2">Login<i className='fas fa-sign-in'></i> </Link>

                                            <div className="tab-content">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="pills-login"
                                                    role="tabpanel"
                                                    aria-labelledby="tab-login"
                                                >

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            </section>
        </div>
    )
}

export default Logout