import axios from "axios";

var token = sessionStorage.getItem("token");

const api = axios.create({
    baseURL: "https://rede-futema.herokuapp.com/",
    headers: {
        Authorization: "Bearer " + token
    }
});

export default api;