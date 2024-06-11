<div className="container-fluid" id="main">
  <div className="row row-offcanvas row-offcanvas-left h-100">
    {/* Add Sidebar Here */}

    <div className="col-md-9 col-lg-10 main mt-4">
      <div className="row mb-3">
        <div className="col-xl-6 col-lg-6 mb-2">
          <div className="card card-inverse card-success">
            <div className="card-block bg-success p-3">
              <div className="rotate">
                <i className="bi bi-currency-dollar fa-5x" />
              </div>
              <h6 className="text-uppercase">Total Sales</h6>
              <h1 className="display-1">$134</h1>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 mb-2">
          <div className="card card-inverse card-danger">
            <div className="card-block bg-danger p-3">
              <div className="rotate">
                <i className="bi bi-currency-dollar fa-5x" />
              </div>
              <h6 className="text-uppercase">Monthly Earning</h6>
              <h1 className="display-1">$87</h1>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row  container">
        <div className="col-lg-12">
          <h4 className="mt-3 mb-4">Revenue Tracker</h4>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th scope="col">Month</th>
                <th scope="col">Orders</th>
                <th scope="col">Revenue</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">January</th>
                <td>16</td>
                <td>$200</td>
                <td>
                  <a href="" className="btn btn-primary mb-1">
                    <i className="fas fa-eye" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">February</th>
                <td>16</td>
                <td>$200</td>
                <td>
                  <a href="" className="btn btn-primary mb-1">
                    <i className="fas fa-eye" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">March</th>
                <td>6</td>
                <td>$20</td>
                <td>
                  <a href="" className="btn btn-primary mb-1">
                    <i className="fas fa-eye" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">April</th>
                <td>16</td>
                <td>$200</td>
                <td>
                  <a href="" className="btn btn-primary mb-1">
                    <i className="fas fa-eye" />
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">May</th>
                <td>36</td>
                <td>$500</td>
                <td>
                  <a href="" className="btn btn-primary mb-1">
                    <i className="fas fa-eye" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col">
              <h4 className="mt-4">Revenue Analytics</h4>
            </div>
          </div>
          <div className="row my-2">
            <div className="col-md-12 py-1">
              <div className="card">
                <div className="card-body">
                  <canvas id="line-chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
