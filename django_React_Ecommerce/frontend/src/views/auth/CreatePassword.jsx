import  {useState } from "react"

import { useSearchParams, useNavigate } from "react-router-dom"
import apiInstance from "../../utils/axios.js";

function CreatePassword() {
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const [searchParam] = useSearchParams()
    const navigate = useNavigate()
    const otp = searchParam.get("otp")
    const uidb64 = searchParam.get("uidb64")

    const handlePasswordSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        if(password !== confirmPassword) {
            alert("Password Does Not match.")
            setIsLoading(false)
        } else {
            setIsLoading(true)
            const formdata = new FormData()
            formdata.append('password',password)
            formdata.append('otp',otp)
            formdata.append('uidb64',uidb64)

            try {
                await apiInstance.post('user/password-change/', formdata).then((res) => {
                    console.log(res.data);
                    alert("Password changed successfully.")
                    navigate('/login')
                    setIsLoading(false)
                })
            } catch (error) {
                alert("An error occured while trying to change the Password.")
                setIsLoading(false)
            }
        }


    }

    return (
        <>
            <section>
                <main className="" style={{marginBottom: 100, marginTop: 50}}>
                    <div className="container">
                        <section className="">
                            <div className="row d-flex justify-content-center">
                                <div className="col-xl-5 col-md-8">
                                    <div className="card rounded-5">
                                        <div className="card-body p-4">
                                            <h3 className="text-center">Create New Password</h3>
                                            <br/>

                                            <div className="tab-content">
                                                <div
                                                    className="tab-pane fade show active"
                                                    id="pills-login"
                                                    role="tabpanel"
                                                    aria-labelledby="tab-login"
                                                >
                                                    <form onSubmit={handlePasswordSubmit}>
                                                        {/* Email input */}
                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="Full Name">
                                                                Enter New Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="password"
                                                                required
                                                                name="password"
                                                                placeholder="Enter New Password"
                                                                value={password}
                                                                className="form-control"
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="form-outline mb-4">
                                                            <label className="form-label" htmlFor="Full Name">
                                                                Confirm New Password
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="confirmPassword"
                                                                required
                                                                name="confirmPassword"
                                                                placeholder="Confirm New Password"
                                                                className="form-control"
                                                                value={confirmPassword}
                                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                            />
                                                            {/* {error !== null &&
                                                            <>
                                                                {error === true

                                                                    ? <p className='text-danger fw-bold mt-2'>Password Does Not Match</p>
                                                                    : <p className='text-success fw-bold mt-2'>Password Matched</p>
                                                                }
                                                            </>
                                                        } */}
                                                        </div>


                                                        <div className="text-center">
                                                            {isLoading === true
                                                                ? <button type='submit' disabled
                                                                          className='btn btn-primary w-100'>Processing...
                                                                    <span className="mr-2">         </span>
                                                                    <i className="fa fa-spinner fa-spin"></i>
                                                                </button>
                                                                : <button type='submit'
                                                                          className='btn btn-primary w-100'>Reset
                                                                    Password <span className="mr-2">       </span>
                                                                    <i className="fa fa-check-circle"></i>
                                                                </button>
                                                            }
                                                        </div>

                                                    </form>
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

export default CreatePassword
