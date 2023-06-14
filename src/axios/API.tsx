import axios, { AxiosResponse } from "axios";

interface HomeStayData {
  id: number;
  name: string;
  rating: number;
  city: string;
  price: string;
}

interface API {
  Login: (email: string, password: string) => Promise<AxiosResponse<any, any>>;
  SignUp: (
    nama: string,
    phone: string,
    email: string,
    password: string
  ) => Promise<AxiosResponse<any, any>>;
  submitHomeStay: (data: HomeStayData) => Promise<AxiosResponse<any, any>>;
  getHomeStayData: () => Promise<AxiosResponse<any, any>>;
}

const instance = axios.create({
  baseURL: `http://35.193.64.69`,
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
};

export default API;
