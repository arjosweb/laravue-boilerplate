import axios from "axios";

const USER_TOKEN = window.localStorage.getItem("access_token")
const AuthStr = `Bearer ${USER_TOKEN}`;
const base_URL = 'http://127.0.0.1:8000/api/';

const axiosInstanceBackend = axios.create({
    baseURL: base_URL,
    headers: {
        'Authorization': AuthStr,
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    timeout: 8000
});

export const api = axiosInstanceBackend;

