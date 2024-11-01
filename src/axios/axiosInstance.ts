import axios from "axios";
import { store } from "../state/store";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const token = state.auth.token;

    if (token) config.headers["Authorization"] = `Bearer ${token}`;

    return config;
  },
  (err) => {
    console.error(err);
  }
);

export default axiosInstance;
