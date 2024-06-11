import Cookie from "js-cookie";
import jwt_decode from "jwt-decode";

function UserData() {
    let access_token = Cookie.get("access_token")
    let refresh_token = Cookie.get("refresh_token")

    if (access_token && refresh_token) {
        const token = refresh_token
        const decoded = jwt_decode(token)
        return decoded
    } else {
        // console.log("User token does not Exists");
    }
}

export default UserData