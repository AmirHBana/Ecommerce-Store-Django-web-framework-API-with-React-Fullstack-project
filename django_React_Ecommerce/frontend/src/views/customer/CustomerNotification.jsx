import Sidebar from "./Sidebar.jsx";
import apiInstance from "../../utils/axios.js";
import UserData from "../plugin/UserData.jsx";
import Swal from "sweetalert2";
import {useEffect, useState} from "react";
import moment from "moment";
function CustomerNotification() {

    const [notifications, setNotifications] = useState([])

    const fetchNoti = () => {
        apiInstance.get(`customer/notification/${UserData()?.user_id}/`).then((res) => {
            setNotifications(res.data)
        })
    }

    useEffect(() => {
        fetchNoti()
    }, []);

    const MarkNotiAsSeen = (userId, notiId) => {
        apiInstance.get(`customer/notification/${UserData()?.user_id}/${notiId}/`).then((res) => {
            fetchNoti()
        })

        Swal.fire({
            icon:"success",
            text: "Notification Marked as Seen"
        })
    }

    return (
        <>
            <main className="mt-5">
                <div className="container">
                    <section className="">
                        <div className="row">
                            {/* Sidebar Here */}
                            <Sidebar />
                            <div className="col-lg-9 mt-1">
                                <section className="">
                                    <main className="mb-5" style={{}}>
                                        <div className="container px-4">
                                            <section className="">
                                                <h3 className="mb-3">
                                                    <i className="fas fa-bell"/> Notifications{" "}
                                                </h3>
                                                <div className="list-group">
                                                    {notifications?.map((n, index) => (
                                                        <a href="" className="list-group-item list-group-item-action" key={index}>
                                                            <div className="d-flex w-100 justify-content-between">
                                                                <h5 className="mb-1">Order Confirmed</h5>
                                                                <small className="text-muted">{moment(n.date).format("MMM D, YYYY")}</small>
                                                            </div>
                                                            <p className="mb-1">
                                                                Your order has been confirmed.
                                                            </p>
                                                            <button
                                                                className="btn btn-success mt-3"
                                                                onClick={() => MarkNotiAsSeen(UserData()?.user_id, n.id)}
                                                            ><i
                                                                className="fas fa-eye"></i></button>
                                                        </a>
                                                    ))}

                                                    {notifications.length < 1 &&
                                                        <h4 className="p-4"> No Notification Yet.</h4>
                                                    }

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

        </>
    )
}

export default CustomerNotification