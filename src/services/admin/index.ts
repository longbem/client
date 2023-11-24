import { request } from "@/pages/api/request";
import { API_PATH } from "@/utils/path";

export const loginAdmin = async (data: {
  username: string;
  password: string;
}) => {
  try {
    console.log("data", data);
    return request.post(API_PATH.ADMIN_LOGIN, data);
  } catch (error) {
    return Promise.reject(error);
  }
};
