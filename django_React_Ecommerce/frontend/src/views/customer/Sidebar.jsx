import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import apiInstance from "../../utils/axios.js";
import UserData from "../plugin/UserData.jsx";

function Sidebar() {

    const [profile, setProfile] = useState({})
    const [orders, setOrders] = useState([])

    const userData = UserData()

    const [notifications, setNotifications] = useState([])
    const [wishlist, setWishlist] = useState([])



    useEffect(() => {
        apiInstance.get(`user/profile/${userData?.user_id}/`).then((res) => {
            setProfile(res.data)
        })
    }, []);



    useEffect(() => {
        apiInstance.get(`customer/orders/${userData?.user_id}/`).then((res) => {
            setOrders(res.data)
        })
    }, []);

    const statusCounts = orders.reduce((counts, order) => {
        const status = order.order_status
        counts[status]= (counts[status] || 0) + 1
        return counts
    }, {})

    const fetchNoti = () => {
        apiInstance.get(`customer/notification/${UserData()?.user_id}/`).then((res) => {
            setNotifications(res.data)
        })
    }

    useEffect(() => {
        fetchNoti()
    }, []);

    const fetchWishlist = async () => {
        await apiInstance.get(`customer/wishlist/${userData?.user_id}/`).then((res) => {
            setWishlist(res.data)
        })
    }

    useEffect(() => {
        fetchWishlist()
    }, []);

    return (
        <>
            <div className="col-lg-3">
                <>
                    <div className="d-flex justify-content-center align-items-center flex-column mb-4 shadow rounded-3">
                        <img
                            src={profile.image}
                            style={{width: 120, height: 120, borderRadius: "50%", objectFit: "cover"}}
                            alt=""
                        />
                        <div className="text-center">
                            <h3 className="mb-0">{profile.full_name}</h3>
                            <p className="mt-0">
                                <Link to="/customer/settings/"><i className='fas fa-edit me-2'></i> Edit Account</Link>
                            </p>
                        </div>
                    </div>
                    <ol className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <Link to={'/customer/account/'} className="fw-bold text-dark"> <i
                                    className='fas fa-user me-2'></i> Account</Link>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <Link to={'/customer/orders/'} className="fw-bold text-dark"><i
                                    className='fas fa-shopping-cart me-2'></i>Orders</Link>
                            </div>
                            <span className="badge bg-primary rounded-pill">{orders?.length || 0}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <Link to={'/customer/wishlist/'} className="fw-bold text-dark"><i
                                    className='fas fa-heart fa-fade me-2'></i> Wishlist</Link>
                            </div>
                            <span className="badge bg-primary rounded-pill">{wishlist?.length || 0}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <Link to={'/customer/notifications/'} className="fw-bold text-dark"><i
                                    className='fas fa-bell fa-shake me-2'></i> Notification</Link>
                            </div>
                            <span className="badge bg-primary rounded-pill">{notifications?.length || 0}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <Link to={'/customer/settings/'} className="fw-bold text-dark"><i
                                    className='fas fa-gear fa-spin me-2'></i> Setting</Link>
                            </div>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <Link to="/logout" className="fw-bold text-danger"><i
                                    className='fas fa-sign-out me-2'></i> Logout</Link>
                            </div>
                        </li>
                    </ol>
                </>
            </div>
        </>
    )
}

export default Sidebar