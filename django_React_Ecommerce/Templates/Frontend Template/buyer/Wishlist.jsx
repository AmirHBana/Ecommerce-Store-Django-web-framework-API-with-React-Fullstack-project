<main className="mt-5">
    <div className="container">
        <section className="">
            <div className="row">
                {/* Sidebar Here */}


                <div className="col-lg-9 mt-1">
                    <section className="">
                        <main className="mb-5" style={{}}>
                            <div className="container">
                                <section className="">
                                    <div className="row">
                                        <h3 className="mb-3">
                                            <i className="fas fa-heart text-danger" /> Wishlist
                                        </h3>
                                        <div className="col-lg-4 col-md-12 mb-4">
                                            <div className="card">
                                                <div
                                                    className="bg-image hover-zoom ripple"
                                                    data-mdb-ripple-color="light"
                                                >
                                                    <img
                                                        src="https://www.eclosio.ong/wp-content/uploads/2018/08/default.png"
                                                        className="w-100"
                                                        style={{ width: "100px", height: "300px", objectFit: "cover" }}
                                                    />
                                                    <a href="#!">
                                                        <div className="mask">
                                                            <div className="d-flex justify-content-start align-items-end h-100">
                                                                <h5>
                                                                    <span className="badge badge-primary ms-2">
                                                                        New
                                                                    </span>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="hover-overlay">
                                                            <div
                                                                className="mask"
                                                                style={{
                                                                    backgroundColor: "rgba(251, 251, 251, 0.15)"
                                                                }}
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="card-body">
                                                    <a href="" className="text-reset">
                                                        <h6 className="card-title mb-3 ">Product title here...</h6>
                                                    </a>
                                                    <a href="" className="text-reset">
                                                        <p>Product Title Here</p>
                                                    </a>
                                                    <h6 className="mb-3">$43.11</h6>

                                                    <button type="button" className="btn btn-danger px-3 me-1 mb-1">
                                                        <i className="fas fa-heart" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Show This if there are no item in wishlist */}
                                        <h6 className='container'>Your wishlist is Empty </h6>


                                    </div>
                                </section>
                            </div>
                        </main>
                    </section>
                </div>
            </div>
        </section>
    </div>
</main>