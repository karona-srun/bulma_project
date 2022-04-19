import axios from "axios";
export default axios.create({
    baseURL: "http://phsar_ni_hao.test/api",
    bearerToken: "",
    headers: {
        "Authorization": "Bearer " + this.bearerToken,
        "Content-type": "application/json;charset=utf-8",
        "X-Requested-With": "XMLHttpRequest"
    }
});