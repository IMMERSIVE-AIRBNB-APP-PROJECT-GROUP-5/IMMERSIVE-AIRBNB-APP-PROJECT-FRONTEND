import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";
import loginImg from "../assets/fotosamping.jpeg";
import API from "../axios/API";

const schema = Yup.object({
  email: Yup.string().required("Email required"),
  password: Yup.string().required("Password required"),
  name: Yup.string().required("Name required"),
  phone: Yup.string().required("Phone number required"),
});

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      phone: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const SignupHandle = async () => {
    const user = {
      email: formik.values.email,
      password: formik.values.password,
      name: formik.values.name,
      phone: formik.values.phone,
    };

    try {
      // Panggil API Sign Up
      const response = await API.signup(user);
      console.log(response.data);

      // Navigate ke halaman dashboard
      navigate("/dashboard");

      // Contoh penggunaan Swal
      Swal.fire(
        "Sign Up Success",
        "You have successfully signed up.",
        "success"
      );
    } catch (error) {
      console.error(error);

      // Contoh penggunaan Swal
      Swal.fire(
        "Sign Up Error",
        "An error occurred while signing up.",
        "error"
      );
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full m-10">
      <div className="hidden sm:block">
        <img className="w-full h-screen object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-White-800 flex flex-col justify-center">
        <div className="text-right mr-20 mt-0">
          <p className="text-sm text-gray-400 py-2">
            Sudah memiliki akun?
            <Link to="/login" className="text-blue-500 ml-1">
              Login
            </Link>
          </p>
        </div>
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-white p-8 px-8">
          <h3 className="text-xl sm:text-2xl text-black font-bold text-center">
            Daftar Akun Baru
          </h3>
          <div className="flex flex-col text-black py-2">
            <label>Email</label>
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
                formik.values.email === "" ? "bg-white" : ""
              }`}
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="flex flex-col text-black py-2">
            <label>Password</label>
            <div className="relative">
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
                  formik.values.password === "" ? "bg-white" : ""
                }`}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="********"
              />
              <button
                type="button"
                className="absolute right-2 mt-3 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <div className="flex flex-col text-black py-2">
            <label>Name</label>
            <input
              value={formik.values.name}
              onChange={formik.handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
                formik.values.name === "" ? "bg-white" : ""
              }`}
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col text-black py-2">
            <label>Phone Number</label>
            <input
              value={formik.values.phone}
              onChange={formik.handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline ${
                formik.values.phone === "" ? "bg-white" : ""
              }`}
              id="phone"
              type="text"
              placeholder="Phone Number"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              onClick={SignupHandle}
              className="bg-sky-500 hover:bg-blue-700 text-white w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Daftar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
