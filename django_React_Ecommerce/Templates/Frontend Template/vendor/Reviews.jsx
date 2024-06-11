<div className="container-fluid" id="main">
  <div className="row row-offcanvas row-offcanvas-left h-100">
    <div
      className="col-md-3 col-lg-2 sidebar-offcanvas bg-dark navbar-dark"
      id="sidebar"
      role="navigation"
    >
      <ul className="nav nav-pills flex-column mb-auto nav flex-column pl-1 pt-2">
        <li className="mb-3">
          <a href="dashboard.html" className="nav-link text-white ">
            <i className="bi bi-speedometer" /> Dashboard{" "}
          </a>
        </li>
        <li className="mb-3">
          <a href="products.html" className="nav-link text-white">
            <i className="bi bi-grid" /> Products{" "}
          </a>
        </li>
        <li className="mb-3">
          <a href="orders.html" className="nav-link text-white">
            <i className="bi bi-cart-check" /> Orders{" "}
          </a>
        </li>
        <li className="mb-3">
          <a href="earning.html" className="nav-link text-white ">
            <i className="bi bi-currency-dollar" /> Earning{" "}
          </a>
        </li>
        <li className="mb-3">
          <a href="reviews.html" className="nav-link text-white active">
            <i className="bi bi-star" /> Reviews{" "}
          </a>
        </li>
        <li className="mb-3">
          <a href="faqs.html" className="nav-link text-white">
            <i className="bi bi-patch-question" /> FAQs{" "}
          </a>
        </li>
        <li className="mb-3">
          <a href="coupon.html" className="nav-link text-white">
            <i className="bi bi-tag" /> Coupon &amp; Discount{" "}
          </a>
        </li>
        <li className="mb-3">
          <a href="customers.html" className="nav-link text-white">
            <i className="bi bi-people" /> Customers{" "}
          </a>
        </li>
        <li className="mb-3">
          <a href="notifications.html" className="nav-link text-white">
            <i className="bi bi-bell" /> Notifications{" "}
          </a>
        </li>
        <li className="mb-3">
          <a href="message.html" className="nav-link text-white">
            <i className="bi bi-envelope" /> Message{" "}
          </a>
        </li>
        <li className="mb-3">
          <a href="settings.html" className="nav-link text-white">
            <i className="bi bi-gear-fill" /> Settings{" "}
          </a>
        </li>
        <li className="mb-3">
          <a href="../login.html" className="nav-link text-white">
            <i className="bi bi-box-arrow-left" /> Logout{" "}
          </a>
        </li>
        <li className="mt-4">
          <div className="row p-1">
            <div className="col-lg-3">
              <img
                src="https://cdn4.buysellads.net/uu/1/134955/1683580549-designdev.jpg"
                style={{ width: 70, height: 70, objectFit: "cover", borderRadius: "50%" }}
                alt=""
              />
            </div>
            <div className="col lg-9">
              <h4 className="text-white">Destiny Franks</h4>
              <p className="text-white">@desphixs</p>
            </div>
          </div>
        </li>
      </ul>
      <hr />
    </div>
    {/*/col*/}
    <div className="col-md-9 col-lg-10 main mt-4">
      <h4>
        <i className="fas fa-star" /> Reviews and Rating
      </h4>

      <section
        className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/Photos/Others/background2.webp)"
        }}
      >
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-10">
            <div className="card mt-3 mb-3">
              <div className="card-body m-3">
                <div className="row">
                  <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                      className="rounded-circle img-fluid shadow-1"
                      alt="woman avatar"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="col-lg-8">
                    <p className="text-dark fw-bold mb-4">
                      Review:{" "}
                      <i>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id quam sapiente molestiae numquam quas,
                        voluptates omnis nulla ea odio quia similique corrupti
                        magnam.
                      </i>
                    </p>
                    <p className="fw-bold text-dark mb-2">
                      <strong>Name: Anna Smith</strong>
                    </p>
                    <p className="fw-bold text-muted mb-0">
                      Product: Turtle Neck Shirt
                    </p>
                    <p className="fw-bold text-muted mb-0">
                      Rating: 4 <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </p>
                    <div className="d-flex mt-3">
                      <p className="fw-bold text-muted mb-0">
                        <a href="#" className="btn btn-primary">
                          Reply <i className="fas fa-pen" />
                        </a>
                      </p>
                      <p className="fw-bold text-muted mb-0 ms-2">
                        <a href="#" className="btn btn-danger">
                          Delete <i className="fas fa-trash" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3 mb-3">
              <div className="card-body m-3">
                <div className="row">
                  <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                      className="rounded-circle img-fluid shadow-1"
                      alt="woman avatar"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="col-lg-8">
                    <p className="text-dark fw-bold mb-4">
                      Review:{" "}
                      <i>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id quam sapiente molestiae numquam quas,
                        voluptates omnis nulla ea odio quia similique corrupti
                        magnam.
                      </i>
                    </p>
                    <p className="fw-bold text-dark mb-2">
                      <strong>Name: Anna Smith</strong>
                    </p>
                    <p className="fw-bold text-muted mb-0">
                      Product: Turtle Neck Shirt
                    </p>
                    <p className="fw-bold text-muted mb-0">
                      Rating: 4 <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </p>
                    <div className="d-flex mt-3">
                      <p className="fw-bold text-muted mb-0">
                        <a href="#" className="btn btn-primary">
                          Reply <i className="fas fa-pen" />
                        </a>
                      </p>
                      <p className="fw-bold text-muted mb-0 ms-2">
                        <a href="#" className="btn btn-danger">
                          Delete <i className="fas fa-trash" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3 mb-3">
              <div className="card-body m-3">
                <div className="row">
                  <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                      className="rounded-circle img-fluid shadow-1"
                      alt="woman avatar"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="col-lg-8">
                    <p className="text-dark fw-bold mb-4">
                      Review:{" "}
                      <i>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id quam sapiente molestiae numquam quas,
                        voluptates omnis nulla ea odio quia similique corrupti
                        magnam.
                      </i>
                    </p>
                    <p className="fw-bold text-dark mb-2">
                      <strong>Name: Anna Smith</strong>
                    </p>
                    <p className="fw-bold text-muted mb-0">
                      Product: Turtle Neck Shirt
                    </p>
                    <p className="fw-bold text-muted mb-0">
                      Rating: 4 <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </p>
                    <div className="d-flex mt-3">
                      <p className="fw-bold text-muted mb-0">
                        <a href="#" className="btn btn-primary">
                          Reply <i className="fas fa-pen" />
                        </a>
                      </p>
                      <p className="fw-bold text-muted mb-0 ms-2">
                        <a href="#" className="btn btn-danger">
                          Delete <i className="fas fa-trash" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card mt-3 mb-3">
              <div className="card-body m-3">
                <div className="row">
                  <div className="col-lg-4 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                      className="rounded-circle img-fluid shadow-1"
                      alt="woman avatar"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="col-lg-8">
                    <p className="text-dark fw-bold mb-4">
                      Review:{" "}
                      <i>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id quam sapiente molestiae numquam quas,
                        voluptates omnis nulla ea odio quia similique corrupti
                        magnam.
                      </i>
                    </p>
                    <p className="fw-bold text-dark mb-2">
                      <strong>Name: Anna Smith</strong>
                    </p>
                    <p className="fw-bold text-muted mb-0">
                      Product: Turtle Neck Shirt
                    </p>
                    <p className="fw-bold text-muted mb-0">
                      Rating: 4 <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                      <i className="fas fa-star" />
                    </p>
                    <div className="d-flex mt-3">
                      <p className="fw-bold text-muted mb-0">
                        <a href="#" className="btn btn-primary">
                          Reply <i className="fas fa-pen" />
                        </a>
                      </p>
                      <p className="fw-bold text-muted mb-0 ms-2">
                        <a href="#" className="btn btn-danger">
                          Delete <i className="fas fa-trash" />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</div>
