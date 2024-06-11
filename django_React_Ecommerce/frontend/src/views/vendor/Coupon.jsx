import Sidebar from "./Sidebar.jsx";
import {useState, useEffect} from "react";
import apiInstance from "../../utils/axios.js";
import UserData from "../plugin/UserData.jsx";
import {Link} from "react-router-dom";
import moment from "moment";
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast:true,
    position:"top",
    showConfirmButton:false,
    timer:2100,
    timerProgressBar:true,
})

function Coupon() {

    const [stats, setStats] = useState([])
    const [coupons, setCoupons] = useState([])
    const [createCoupon, setCreateCoupon] = useState({
        code: "",
        discount: "",
        active: true,
    })

    const fetchCouponData = async () => {
        await apiInstance.get(`vendor-coupon-stats/${UserData()?.vendor_id}/`).then((res) => {
            setStats(res.data[0]);
        })

        await apiInstance.get(`vendor-coupon-list/${UserData()?.vendor_id}/`).then((res) => {
            setCoupons(res.data);
        })
    }

    useEffect(() => {
        fetchCouponData()
    }, []);

    const handleDeleteCoupon = async (couponId) => {
        console.log(couponId);
        await apiInstance.delete(`vendor-coupon-detail/${UserData()?.vendor_id}/${couponId}/`)
        fetchCouponData()
        Toast.fire({
            icon: "success",
            title: "Coupon Deleted Successfully",
        })
    }

    const handleCouponChange = (event) => {
        setCreateCoupon({
            ...createCoupon,
            [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
        })
        console.log(createCoupon.code);
        console.log(createCoupon.discount);
        console.log(createCoupon.active);
    }

    const handleCreateCoupon = async (e) => {
        e.preventDefault()

        const formdata = new FormData()

        formdata.append("vendor_id", UserData()?.vendor_id)
        formdata.append("code", createCoupon.code)
        formdata.append("discount", createCoupon.discount)
        formdata.append("active", createCoupon.active)

        await apiInstance.post(`vendor-coupon-list/${UserData()?.vendor_id}/`, formdata).then((res) => {
        })
        fetchCouponData()
        Swal.fire({
                icon: "success",
                title: "Coupon Created Successfully"
            })
    }

    return (
        <>
            <div className="container-fluid" id="main">
                <div className="row row-offcanvas row-offcanvas-left h-100">
                    {/* Sidebar Here */}
                    <Sidebar />
                    <div className="col-md-9 col-lg-10 main mt-4">
                        <div className="row mb-3">
                            <div className="col-xl-6 col-lg-6 mb-2">
                                <div className="card card-inverse card-success">
                                    <div className="card-block bg-success p-3 text-center">
                                        <div className="rotate">
                                            <i className="bi bi-tag fa-5x"></i>
                                        </div>
                                        <h6 className="text-uppercase">Total Coupons</h6>
                                        <h1 className="display-1">{stats?.total_coupons}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 mb-2">
                                <div className="card card-inverse card-danger">
                                    <div className="card-block bg-danger p-3 text-center">
                                        <div className="rotate">
                                            <i className="bi bi-check-circle fa-5x"></i>
                                        </div>
                                        <h6 className="text-uppercase">Active Coupons</h6>
                                        <h1 className="display-1">{stats?.active_coupons}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row container">
                            <div className="col-lg-12">
                                <h4 className="mt-3 mb-4">Coupons</h4>
                                <table className="table">
                                    <thead className="table-dark">
                                    <tr>
                                        <th scope="col">Code</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Discount</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {coupons?.map((c, index) => (
                                        <tr key={index}>
                                            <td>{c?.code}</td>
                                            <td>Percentages</td>
                                            <td>{c?.discount}%</td>
                                            <td>
                                                {c.active === true
                                                    ? 'Active'
                                                    : 'In-Active'
                                                }
                                            </td>
                                            <td>

                                                <Link to={`/vendor/coupon/${c.id}/`} className="btn btn-primary mb-1 ms-2">
                                                    <i className="fas fa-edit"></i>
                                                </Link>
                                                <a onClick={() => handleDeleteCoupon(c.id)}
                                                   className="btn btn-danger mb-1 ms-2">
                                                    <i className="fas fa-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}

                                    {coupons.length < 1 &&
                                        <h5 className='mt-1 p-4'>No Coupons Yet.</h5>
                                    }

                                    <button type="button" className="btn btn-info"
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal">
                                        <i className="fas fa-plus"></i>Create Coupon
                                    </button>

                                    <div className="modal fade" id="exampleModal" tabIndex="-1"
                                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="exampleModalLabel">Create Coupon Form</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                            aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <form onSubmit={handleCreateCoupon}>
                                                        <div className="mb-3">
                                                            <label htmlFor="code" className="form-label">Coupon
                                                                Code</label>
                                                            <input type="text" className="form-control" name="code"
                                                                   onChange={handleCouponChange}
                                                                   value={createCoupon.code}
                                                                   placeholder="Enter Coupon code"
                                                                   id="code"
                                                                   aria-describedby="emailHelp"/>
                                                        </div>
                                                        <div className="mb-3">
                                                            <label htmlFor="discount" className="form-label">Discount</label>
                                                            <input type="number" className="form-control" name="discount"
                                                                   onChange={handleCouponChange}
                                                                   value={createCoupon.discount}
                                                                   placeholder="% Enter Coupon discount"
                                                                   id="discount"
                                                                   aria-describedby="emailHelp"/>
                                                        </div>

                                                        <div className="mb-3 form-check">
                                                            <input checked={createCoupon.active} onChange={handleCouponChange} name="active" type="checkbox" className="form-check-input"
                                                                   id="exampleCheck1"/>
                                                            <label className="form-check-label"
                                                                   htmlFor="exampleCheck1">Active</label>
                                                        </div>
                                                        <button type="submit" className="btn btn-primary">Create Coupon
                                                        </button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Add more rows here as needed */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Coupon