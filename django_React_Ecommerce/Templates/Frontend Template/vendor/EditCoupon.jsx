<div className="container-fluid" id="main" >
    <div className="row row-offcanvas row-offcanvas-left h-100">
        {/* Add Side Bar Here */}
        {/* <Sidebar /> */}

        <div className="col-md-9 col-lg-10 main mt-4">
            <h4 className="mt-3 mb-4"><i className="bi bi-tag" /> Coupons</h4>
            <form className='card shadow p-3'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Code
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name='code'
                        placeholder='Enter Coupon Code'
                        value=""
                    />
                    <div id="emailHelp" className="form-text">
                        E.g DESTINY2024
                    </div>
                </div>
                <div className="mb-3 mt-4">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                        Discount
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleInputPassword1"
                        name='discount'
                        placeholder='Enter Discount'
                    />
                    <div id="emailHelp" className="form-text">
                        NOTE: Discount is in <b>percentage</b>
                    </div>
                </div>
                <div className="mb-3 form-check">
                    <input name='active' type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Activate Coupon
                    </label>
                </div>
                <div className="d-flex">
                    <Link to="/vendor/coupon/" className="btn btn-secondary">
                        <i className='fas fa-arrow-left'></i> Go Back
                    </Link>
                    <button type="submit" className="btn btn-success ms-2">
                        Update Coupon <i className='fas fa-check-circle'></i>
                    </button>
                </div>
            </form>
        </div>


    </div>


</div >