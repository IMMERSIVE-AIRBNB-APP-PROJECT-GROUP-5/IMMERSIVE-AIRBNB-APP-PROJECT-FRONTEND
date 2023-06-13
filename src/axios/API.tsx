import axios, { AxiosResponse } from "axios";

interface API {
  Login: (email: string, password: string) => Promise<AxiosResponse<any, any>>;
  SignUp: (
    name: string,
    phoneNumber: string,
    email: string,
    password: string
  ) => Promise<AxiosResponse<any, any>>;
  submitHomeStay: (data: HomeStayData) => Promise<AxiosResponse<any, any>>;
}

const instance = axios.create({
  baseURL: ``,
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
      url: "/submit-homestay",
      data,
    }),
};

export default API;
