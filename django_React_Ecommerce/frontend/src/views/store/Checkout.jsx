import React, { useState, useEffect } from "react";
import apiInstance from "../../utils/axios.js";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import { SERVER_URL } from "../../utils/constants.js";

function Checkout() {

    const [order, setOrder] = useState([])
    const [couponCode, setCouponCode] = useState("")
    const [paymentLoading, setPaymentLoading] = useState(false)
    const param = useParams()
    const navigate = useNavigate()

    const fetchOrderData = () => {
        apiInstance.get(`checkout/${param.order_oid}/`).then((res) => {
            setOrder(res.data)
        })
    }

    useEffect(() => {
        fetchOrderData()
    }, []);

    const applyCoupon = async () => {
        console.log(couponCode);
        console.log(order.oid);

        const formdata = new FormData()

        formdata.append("order_oid", order.oid)
        formdata.append("coupon_code", couponCode)

        try {
            const response = await apiInstance.post('coupon/', formdata)
            fetchOrderData()
            Swal.fire({
                icon:response.data.icon,
                title:response.data.message
            })
        } catch (error) {
            console.log(error);
        }
    }

    const payWithStripe = (event) => {
        setPaymentLoading(true)
        event.target.form.submit()
    }

    return (
        <>
            <div>
                <main>
                    <main className="mb-4 mt-4">
                        <div className="container">
                            <section className="">
                                <div className="row gx-lg-5">
                                    <div className="col-lg-8 mb-4 mb-md-0">
                                        <section className="">
                                            <div className="alert alert-warning">
                                                <strong>Review Your Shipping &amp; Order Details </strong>
                                            </div>
                                            <form>
                                                <h5 className="mb-4 mt-4">Shipping address</h5>
                                                <div className="row mb-4">

                                                    <div className="col-lg-12">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="form6Example2">Full
                                                                Name</label>
                                                            <input
                                                                type="text"
                                                                readOnly
                                                                className="form-control"
                                                                name="fullName"
                                                                value={order.full_name}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 mt-4">
                                                        <div className="form-outline">
                                                            <label className="form-label"
                                                                   htmlFor="form6Example2">Email</label>
                                                            <input
                                                                type="text"
                                                                readOnly
                                                                className="form-control"
                                                                name="emali"
                                                                value={order.email}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 mt-4">
                                                        <div className="form-outline">
                                                            <label className="form-label"
                                                                   htmlFor="form6Example2">Mobile</label>
                                                            <input
                                                                type="text"
                                                                readOnly
                                                                className="form-control"
                                                                name="mobile"
                                                                value={order.mobile}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mt-4">
                                                        <div className="form-outline">
                                                            <label className="form-label"
                                                                   htmlFor="form6Example2">Address</label>
                                                            <input
                                                                type="text"
                                                                readOnly
                                                                className="form-control"
                                                                name="address"
                                                                value={order.address}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mt-4">
                                                        <div className="form-outline">
                                                            <label className="form-label"
                                                                   htmlFor="form6Example2">City</label>
                                                            <input
                                                                type="text"
                                                                readOnly
                                                                className="form-control"
                                                                name="city"
                                                                value={order.city}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mt-4">
                                                        <div className="form-outline">
                                                            <label className="form-label"
                                                                   htmlFor="form6Example2">State</label>
                                                            <input
                                                                type="text"
                                                                readOnly
                                                                className="form-control"
                                                                name="state"
                                                                value={order.state}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 mt-4">
                                                        <div className="form-outline">
                                                            <label className="form-label"
                                                                   htmlFor="form6Example2">Country</label>
                                                            <input
                                                                type="text"
                                                                readOnly
                                                                className="form-control"
                                                                name="country"
                                                                value={order.country}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>


                                                <h5 className="mb-4 mt-4">Billing address</h5>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input me-2" type="checkbox"
                                                           defaultValue="" id="form6Example8" defaultChecked=""/>
                                                    <label className="form-check-label" htmlFor="form6Example8">
                                                        Same as shipping address
                                                    </label>
                                                </div>
                                            </form>
                                        </section>
                                        {/* Section: Biling details */}
                                    </div>
                                    <div className="col-lg-4 mb-4 mb-md-0">
                                        {/* Section: Summary */}
                                        <section className="shadow-4 p-4 rounded-5 mb-4">
                                            <h5 className="mb-3">Cart Summary</h5>
                                            <div className="d-flex justify-content-between mb-3">
                                                <span>Subtotal </span>
                                                <span>${order.sub_total}</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <span>Shipping </span>
                                                <span>${order.shipping_amount}</span>
                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <span>Tax </span>
                                                <span>${order.tax_fee}</span>
                                            </div>
                                            <div className="d-flex  justify-content-between">
                                                <span>Servive Fee </span>
                                                <span>${order.service_fee}</span>
                                            </div>
                                            {order.saved !== '0.00' &&
                                                <div className="d-flex text-danger fw-bold justify-content-between">
                                                    <span>Discount </span>
                                                    <span>-${order.saved}</span>
                                                </div>
                                            }
                                            <hr className="my-4"/>
                                            <div className="d-flex justify-content-between fw-bold mb-5">
                                                <span>Total </span>
                                                <span>${order.total}</span>
                                            </div>

                                            {/*<div className="shadow p-3 d-flex mt-4 mb-4">*/}
                                            {/*    <input readOnly value={1} name="couponCode" type="text"*/}
                                            {/*           className='form-control' style={{border: "dashed 1px gray"}}*/}
                                            {/*           placeholder='Enter Coupon Code' id=""/>*/}
                                            {/*    <button className='btn btn-success ms-1'><i*/}
                                            {/*        className='fas fa-check-circle'></i></button>*/}
                                            {/*</div>*/}

                                            <section className="shadow rounded-3 card p-4 rounded-5">
                                                <h5 className="mb-4">Apply promo code</h5>
                                                <div className="d-flex align-items-center">
                                                    <input
                                                        type="text"
                                                        className="form-control rounded me-1"
                                                        placeholder="Promo Code"
                                                        onChange={(e) => setCouponCode(e.target.value)}
                                                    />
                                                    <button type="button"
                                                            className="btn btn-success btn-rounded overflow-visible"
                                                            onClick={applyCoupon}
                                                    >
                                                        Apply
                                                    </button>
                                                </div>
                                            </section>

                                            <br/>

                                            {paymentLoading === true &&
                                                <form action={`${SERVER_URL}/api/v1/stripe-checkout/${order?.oid}/`}>
                                                    <button disabled type="submit"
                                                            className="btn btn-primary btn-rounded w-100 mt-2"
                                                            style={{backgroundColor: "#635BFF"}}>Processing... <i
                                                        className="fa fa-spinner fa-spin"></i>
                                                </button>
                                                </form>
                                            }

                                            {paymentLoading === false &&
                                                <form action={`${SERVER_URL}/api/v1/stripe-checkout/${order?.oid}/`}
                                                      method='POST'>
                                                    <button onClick={payWithStripe} type="submit"
                                                            className="btn btn-primary btn-rounded w-100 mt-2"
                                                            style={{backgroundColor: "#635BFF"}}>Pay Now (Stripe) <i
                                                        className='fas fa-credit-card'></i>
                                                    </button>
                                                </form>
                                            }


                                            {/*<PayPalScriptProvider options={initialOptions}>*/}
                                            {/*    <PayPalButtons className='mt-3'*/}
                                            {/*                   createOrder={(data, actions) => {*/}
                                            {/*                       return actions.order.create({*/}
                                            {/*                           purchase_units: [*/}
                                            {/*                               {*/}
                                            {/*                                   amount: {*/}
                                            {/*                                       currency_code: "USD",*/}
                                            {/*                                       value: 100*/}
                                            {/*                                   }*/}
                                            {/*                               }*/}
                                            {/*                           ]*/}
                                            {/*                       })*/}
                                            {/*                   }}*/}

                                            {/*                   onApprove={(data, actions) => {*/}
                                            {/*                       return actions.order.capture().then((details) => {*/}
                                            {/*                           const name = details.payer.name.given_name;*/}
                                            {/*                           const status = details.status;*/}
                                            {/*                           const payapl_order_id = data.orderID;*/}

                                            {/*                           console.log(status);*/}
                                            {/*                           if (status === "COMPLETED") {*/}
                                            {/*                               navigate(`/payment-success/${order.oid}/?payapl_order_id=${payapl_order_id}`)*/}
                                            {/*                           }*/}
                                            {/*                       })*/}
                                            {/*                   }}*/}
                                            {/*    />*/}
                                            {/*</PayPalScriptProvider>*/}

                                            {/* <button type="button" className="btn btn-primary btn-rounded w-100 mt-2">Pay Now (Flutterwave)</button>
                                <button type="button" className="btn btn-primary btn-rounded w-100 mt-2">Pay Now (Paystack)</button>
                                <button type="button" className="btn btn-primary btn-rounded w-100 mt-2">Pay Now (Paypal)</button> */}
                                        </section>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </main>
                </main>
            </div>
        </>
    )
}

export default Checkout