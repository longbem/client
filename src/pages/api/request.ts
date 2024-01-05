import axios from "axios";
import { getCookie } from "cookies-next";
// console.log("process.env", process.env);
const instance = axios.create({
  baseURL: "http://localhost:4000/api",
  timeout: 1000,
});

export const request = instance;

export const privateRequest = async (
  method: string,
  url: string,
  payload?: any
) => {
  const tokenManager = await getCookie("accessToken");
  return instance({
    method: method,
    url: url,
    data: payload,
    headers: {
      Authorization: `Bearer ${tokenManager}`,
    },
  });
};
