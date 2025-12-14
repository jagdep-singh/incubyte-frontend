import axios from "axios";
import { getToken } from "./auth";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getSweets = async () => {
  const res = await api.get("/api/sweets/");
  return res.data;
};

export const purchaseSweet = async (id: number, quantity = 1) => {
  const res = await api.post(
    `/api/sweets/${id}/purchase`,
    null,
    {
      params: { quantity },
    }
  );
  return res.data;
};


export const login = async (email: string, password: string) => {
  const formData = new URLSearchParams();
  formData.append("grant_type", "password");
  formData.append("username", email);
  formData.append("password", password);

  const res = await api.post("/api/auth/login", formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  return res.data;
};

export const register = async (email: string, password: string) => {
  const res = await api.post("/api/auth/register", {
    email,
    password,
  });
  return res.data;
};
