import axios from "axios";
export default axios.create({
    baseURL: "http://phsar_ni_hao.test/api",
    headers: {
        "Content-type": "application/json",
        "X-Requested-With": "XMLHttpRequest"
    }
});