import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const schema = Yup.object().shape({
  image: Yup.mixed().required("Image is required"),
});

const Validasi = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      image: null,
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append("image", values.image);

      try {
        // Send form data to the API
        const response = await axios.post("API_URL", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log(response.data);

        // Display success notification
        Swal.fire(
          "Upload Success",
          "Image uploaded successfully.",
          "success"
        ).then(() => {
          // Navigate to the Sewakan page
          navigate("/Sewakan");
        });
      } catch (error) {
        console.error(error);

        // Display error notification
        Swal.fire(
          "Upload Error",
          "An error occurred while uploading the image.",
          "error"
        );
      }
    },
  });

  return (
    <div>
      <Navbar />
      <div className="container mx-auto my-8">
        <h1 className="text-2xl font-bold mb-4">
          Form Validasi Pengajuan Menyewakan Homestay
        </h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full bg-gray-200 p-8 flex justify-center items-center">
            <label
              htmlFor="image"
              className="flex flex-col items-center justify-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4 10a6 6 0 118 5.657V18h2v-2.343A6 6 0 1018 10H4zm14 0a8 8 0 11-16 0 8 8 0 0116 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M9 4a1 1 0 00-1 1v4H4a1 1 0 100 2h4v4a1 1 0 102 0v-4h4a1 1 0 100-2h-4V5a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="mt-2 text-base leading-normal">
                Pilih file foto homestay Anda
              </span>
              <input
                type="file"
                id="image"
                name="image"
                className="hidden"
                onChange={(event) => {
                  const selectedFile =
                    event.target.files && event.target.files[0];
                  if (selectedFile) {
                    formik.setFieldValue("image", selectedFile);
                  }
                }}
              />
            </label>
          </div>
          {formik.errors.image && formik.touched.image && (
            <div>{formik.errors.image}</div>
          )}
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 float-right"
          >
            Kirim
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Validasi;
