import axios from "axios";

export const baseUrl = axios.create({
  baseURL: "https://api.freeapi.app/api/v1/users/",
});
baseUrl.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer${token}`;
    return config;
  }
});

