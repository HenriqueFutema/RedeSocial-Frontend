import axios from "axios";

const api = axios.create({
    baseURL: "https://rede-futema.herokuapp.com/",

});

export default api;