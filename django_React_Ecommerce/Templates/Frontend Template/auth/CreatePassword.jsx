<section>
    <main className="" style={{ marginBottom: 100, marginTop: 50 }}>
        <div className="container">
            <section className="">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-5 col-md-8">
                        <div className="card rounded-5">
                            <div className="card-body p-4">
                                <h3 className="text-center">Create New Password</h3>
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
                                                    Enter New Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="email"
                                                    required
                                                    name="password"
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="form-outline mb-4">
                                                <label className="form-label" htmlFor="Full Name">
                                                    Confirm New Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="email"
                                                    required
                                                    name="confirmPassword"
                                                    className="form-control"
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
                                                <button type='submit' className='btn btn-primary w-100'>Reset Password</button>
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