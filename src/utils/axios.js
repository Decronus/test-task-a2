import axios from "axios";
import { API_URL, API_KEY, USER_TOKEN } from "./consts";

const axiosInstance = axios.create({
    baseURL: API_URL,
    timeout: 0,
    headers: {
        Accept: "application/json",
        "X-Api-Key": API_KEY,
        "X-User-Token": USER_TOKEN,
        "X-Device-OS": navigator.userAgent,
    },
});

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
axiosInstance.defaults.headers.post["Access-Control-Allow-Methods"] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";
axiosInstance.defaults.headers.post["Access-Control-Allow-Credentials"] = true;

export default axiosInstance;
