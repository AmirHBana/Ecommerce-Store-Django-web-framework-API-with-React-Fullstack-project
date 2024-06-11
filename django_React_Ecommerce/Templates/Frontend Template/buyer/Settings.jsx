<main className="mt-5">
  <div className="container">
    <section className="">
      <div className="row">
        {/* <Sidebar /> */}

        <div className="col-lg-9 mt-1">
          <section className="">
            <main className="mb-5" style={{}}>
              <div className="container px-4">
                <section className="">
                  <h3 className="mb-3">
                    {" "}
                    <i className="fas fa-gear fa-spin" /> Settings{" "}
                  </h3>
                  <form encType="multipart/form-data">
                    <div className="row">
                      <div className="col-lg-12">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-lg-6 mt-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-lg-6 mt-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Mobile
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-lg-6">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-lg-6 mt-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-lg-6 mt-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="emailHelp"
                        />
                      </div>
                      <div className="col-lg-6 mt-3">
                        <label
                          htmlFor="exampleInputEmail1"
                          className="form-label"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="emailHelp"
                        />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-5">
                      Save Changes
                    </button>
                  </form>
                </section>
              </div>
            </main>
          </section>
        </div>
      </div>
    </section>
  </div>
</main>