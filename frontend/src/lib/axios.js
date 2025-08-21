import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://fullstack-chat-app-ckd5.vercel.app/api" : "/api",
  withCredentials: true,
});
