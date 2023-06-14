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
    name: string,
    phoneNumber: string,
    email: string,
    password: string
  ) => Promise<AxiosResponse<any, any>>;
  submitHomeStay: (data: HomeStayData) => Promise<AxiosResponse<any, any>>;
  getHomeStayData: () => Promise<AxiosResponse<any, any>>;
}

const instance = axios.create({
  baseURL: `https://app.swaggerhub.com/apis-docs/khadafirain/AIR_BNB_APP/1.0.0`,
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
  SignUp: (name, phoneNumber, email, password) =>
    instance({
      method: "POST",
      url: "/signup",
      data: {
        name,
        phoneNumber,
        email,
        password,
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
