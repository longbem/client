import { request } from "@/pages/api/request";
import { API_PATH } from "@/utils/path";

export const requestGetAbout = async () => {
  try {
    return request.get(API_PATH.ADMIN_ABOUT_INFO);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const requestUpdateAbout = async (data: {
  company_name: string;
  address: string;
  phone_number?: string;
  email?: string;
  lat_long?: string;
}) => {
  try {
    return request.post(API_PATH.ADMIN_UPDATE_ABOUT_INFO, data);
  } catch (error) {
    return Promise.reject(error);
  }
};
