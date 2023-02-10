import axios from "axios";
export const client = axios.create({
    baseURL: "http://localhost:3004",
    headers: {
        "Content-Type": "application/json",
    },
});