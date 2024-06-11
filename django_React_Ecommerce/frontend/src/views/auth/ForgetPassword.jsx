import React, { useState } from "react"
import apiInstance from "../../utils/axios.js"
import { useNavigate } from "react-router-dom"

function ForgetPassword() {
    const [email, setEmail] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = async () => {
        setIsLoading(true)
        try {
            await apiInstance.get(`user/password-reset/${email}/`).then((res) => {
                alert("An Email Has been Sent to you.")
                setIsLoading(false)
            })
        } catch (error) {
            alert("Email Does Not Exist.")
            setIsLoading(false)
        }
    }

    return (
        <>
            <section>
                <main className="" style={{marginBottom: 100, marginTop: 50}}>
                    <div className="container">
                        {/* Section: Login form */}
                        <section className="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-5 col-md-8">
                                    <div className="card rounded-5">
                                        <div className="card-body p-4">
                                            <h3 className="text-center">Forgot Password</h3>
                                            <br/>

                                            <div className="tab-content">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="pills-login"
                                                    role="tabpanel"
                                                    aria-labelledby="tab-login"
                                                >
                                                    <div>
                                                        {/* Email input */}
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="Full Name">
                                                                Email Address
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="email"
                                                                name="email"
                                                                placeholder="Enter your Email"
                                                                className="form-control"
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="text-center">
                                                            {isLoading === true
                                                                ? <button type='button' disabled onClick={handleSubmit}
                                                                          className='btn btn-primary w-100'>Processing...
                                                                    <span className="mr-2">         </span>
                                                                    <i className="fa fa-spinner fa-spin"></i>
                                                                </button>
                                                                : <button type='button' onClick={handleSubmit}
                                                                          className='btn btn-primary w-100'>Reset
                                                                    Password
                                                                    <span className="mr-2">         </span>
                                                                    <i className="fa fa-paper-plane"
                                                                       aria-hidden="true"></i>
                                                                </button>
                                                            }
                                                        </div>

                                                    </div>
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
        </>
    )
}

export default ForgetPassword
