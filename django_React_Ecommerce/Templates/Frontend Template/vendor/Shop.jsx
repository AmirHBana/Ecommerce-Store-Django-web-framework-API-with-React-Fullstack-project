<main className="mt-5">
    <div className="container">
        <section className="text-center container">
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <img src="" style={{ width: 100, height: 100, objectFit: "cover", borderRadius: "50%" }} alt="" />
                    <h1 className="fw-light">Shop Name</h1>
                    <p className="lead text-muted">Shop Description Here</p>
                </div>
            </div>
        </section>
        <section className="text-center">
            <h4 className="mb-4">1 Product(s) </h4>
            <div className="row">
                {/* Run the .map() function here */}
                <div className="col-lg-4 col-md-12 mb-4">
                    <div className="card">
                        <div
                            className="bg-image hover-zoom ripple"
                            data-mdb-ripple-color="light"
                        >
                            <Link>
                                <img
                                    src=""
                                    className="w-100"
                                    style={{ width: "100px", height: "300px", objectFit: "cover" }}
                                />
                            </Link>
                            <a href="#!">
                                <div className="mask">
                                    <div className="d-flex justify-content-start align-items-end h-100">
                                        <h5>
                                            <span className="badge badge-primary ms-2">New</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div
                                        className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                    />
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
                {/* .map() function end here */}
            </div>
        </section>
    </div>
</main>