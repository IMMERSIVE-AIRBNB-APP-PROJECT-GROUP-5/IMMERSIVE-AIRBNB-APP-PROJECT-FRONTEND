import axios, { AxiosResponse } from "axios";

interface HomeStayData {
  id: number;
  name: string;
  rating: number;
  city: string;
  price: string;
}

interface EditProfileData {
  id: number;
  name: string;
  email: string;
  phone: string;
  password: string;
}

interface UserData {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface API {
  Login: (email: string, password: string) => Promise<AxiosResponse<any, any>>;
  SignUp: (
    nama: string,
    email: string,
    password: string,
    phone: string
  ) => Promise<AxiosResponse<any, any>>;
  submitHomeStay: (data: HomeStayData) => Promise<AxiosResponse<any, any>>;
  getHomeStayData: () => Promise<AxiosResponse<any, any>>;
  updateProfileData: (
    data: EditProfileData
  ) => Promise<AxiosResponse<any, any>>;
  getUserData: () => Promise<AxiosResponse<UserData, any>>;
}

const instance = axios.create({
  baseURL: "http://35.193.64.69",
});

const API: API = {
  Login: (email, password) =>
    instance({
      method: "POST",
      url: "/login",
      data: {
        email,
        password,
      },
    }),
  SignUp: (nama, email, password, phone) =>
    instance({
      method: "POST",
      url: "/register",
      data: {
        nama,
        email,
        password,
        phone,
      },
    }),
  submitHomeStay: (data) =>
    instance({
      method: "POST",
      url: "/homestays",
      data,
    }),
  getHomeStayData: () =>
    instance({
      method: "GET",
      url: "/homestays",
    }),
  updateProfileData: (data) =>
    instance({
      method: "PUT",
      url: `/users/${data.id}`,
      data,
    }),
  getUserData: () =>
    instance({
      method: "GET",
      url: "/users",
    }),
};

export default API;
