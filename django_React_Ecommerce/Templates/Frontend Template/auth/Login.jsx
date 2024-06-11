<section>
    <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
        <div className="container">
            {/* Section: Login form */}
            <section className="">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-5 col-md-8">
                        <div className="card rounded-5">
                            <div className="card-body p-4">
                                <h3 className="text-center">Login</h3>
                                <br />

                                <div className="tab-content">
                                    <div
                                        className="tab-pane fade show active"
                                        id="pills-login"
                                        role="tabpanel"
                                        aria-labelledby="tab-login"
                                    >
                                        <form>
                                            {/* Email input */}
                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="Full Name">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    value={"Destiny"}
                                                    className="form-control"

                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="loginPassword">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    value={"****************"}
                                                    className="form-control"
                                                />
                                            </div>

                                            <button className='btn btn-primary w-100' type="submit">
                                                <span className="mr-2">Sign In </span>
                                                <i className="fas fa-sign-in-alt" />
                                            </button>

                                            <div className="text-center">
                                                <p className='mt-4'>
                                                    Don't have an account? <Link to="/register">Register</Link>
                                                </p>
                                                <p className='mt-0'>
                                                    <Link to="/forgot-password/" className='text-danger'>Forgot Password?</Link>
                                                </p>
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