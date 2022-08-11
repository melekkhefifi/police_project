import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:9001/interieur",
    headers :{
        "Content-type" : "application/json"
    }
});