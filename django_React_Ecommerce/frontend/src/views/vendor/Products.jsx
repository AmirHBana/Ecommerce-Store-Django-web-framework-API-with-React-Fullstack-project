import Sidebar from "./Sidebar.jsx";
import {useState, useEffect} from "react";
import apiInstance from "../../utils/axios.js";
import UserData from "../plugin/UserData.jsx";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";


const Toast = Swal.mixin({
    toast:true,
    position:"top",
    showConfirmButton:false,
    timer:2100,
    timerProgressBar:true,
})

function Product() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        apiInstance.get(`vendor/products/${UserData()?.vendor_id}/`).then((res) => {
            setProducts(res.data);
        })
    }, []);

    const handleDeleteProduct = async (productPid) => {
        await apiInstance.delete(`vendor-delete-products/${UserData()?.vendor_id}/${productPid}/`)
        await apiInstance.get(`vendor/products/${UserData()?.vendor_id}/`).then((res) => {
            setProducts(res.data);
        })
        Toast.fire({
            icon: 'success',
            title: "Product Deleted successfully",
            position: "bottom-left",
            color:"red"
        })
    }



    return (
        <>
            <div className="container-fluid" id="main">
                <div className="row row-offcanvas row-offcanvas-left h-100">
                    {/* Side Bar Here */}
                    <Sidebar />
                    <div className="col-md-9 col-lg-10 main mt-4">
                        <div className="row mb-3 container">
                            <h4>
                                <i className="bi bi-grid"/> All Products
                            </h4>
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle btn-sm mt-3 mb-4"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Filter <i className="fas fa-sliders"/>
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Status: Live
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Status: In-active
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Status: In-review
                                        </a>
                                    </li>
                                    <hr/>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Date: Latest
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            Date: Oldest
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <table className="table">
                                <thead className="table-dark">
                                <tr>
                                    <th scope="col">Image</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Orders</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {products?.map((p, index) => (
                                    <tr>
                                        <th scope="row">
                                            <img src={p.image} style={{
                                                width: "100px",
                                                height: "70px",
                                                objectFit: "cover",
                                                borderRadius: "10px"
                                            }}/>
                                        </th>
                                        <td>{p?.title}</td>
                                        <td>${p?.price}</td>
                                        <td>{p?.stock_qty}</td>
                                        <td>{p?.orders}</td>
                                        <td>{p?.status?.toUpperCase()}</td>
                                        <td>
                                            <Link to={`/detail/${p?.slug}/`} className="btn btn-primary mb-1 me-2">
                                                <i className="fas fa-eye"/>
                                            </Link>
                                            <Link to={`/vendor/product/update/${p.pid}/`} className="btn btn-success mb-1 me-2">
                                                <i className="fas fa-edit"/>
                                            </Link>
                                            <button onClick={() => handleDeleteProduct(p.pid)} className="btn btn-danger mb-1">
                                                <i className="fas fa-trash"/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Product