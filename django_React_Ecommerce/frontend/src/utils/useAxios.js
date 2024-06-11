import axios, {request} from "axios"
import { isAccessTokenExpired, setAuthUser, getRefreshToken } from "./auth.js"
import { BASE_URL } from "./constants.js"
import Cookies from "js-cookie"


const useAxios = async () => {
    const access_token = Cookies.get('access_token')
    const refresh_token = Cookies.get('refresh_token')

    const axiosInstance = axios.create({
        baseURL: BASE_URL,
        headers: {Authorization: `Bearar ${access_token}`}
    })

    axiosInstance.interceptors.request.use(async (req) => {
        if (!isAccessTokenExpired(access_token)) {
            return req
        }

        const response = await getRefreshToken(refresh_token)
        setAuthUser(response.access, response.refresh)

        req.headers.Authorization = `Bearar ${response.data.access}`
        return req
    })

    return axiosInstance

}

export default useAxios