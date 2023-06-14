import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Sewakan = () => {
  return (
    <>
      <Navbar label="Penginapan saya" />
      <div className="w-[70%] mx-auto mt-10">
        <button type="button" className="btn btn-info text-white">
          Penginapan saya
        </button>
      </div>
      <div className="collapse bg-white shadow-xl w-[70%] mx-auto mt-10">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h1 className="text-2xl font-bold">Villa Griya Indah</h1>
          <div className="flex justify-end">
            <button
              type="button"
              className="text-base mr-3 text-sky-500 underline"
            >
              Edit
            </button>
            <button type="button" className="text-base text-red-500 underline">
              Hapus
            </button>
          </div>
          <p className="text-sm font-light my-2">Malang</p>
        </div>
        <div className="collapse-content">
          <p className="text-sm font-light"></p>
        </div>
      </div>
      <div className="w-[70%] mx-auto mt-10">
        <button type="button" className="btn btn-success">
          Tambahkan Sewakan Penginapan Baru
        </button>
      </div>

      <div className="mt-44">
        <Footer />
      </div>
    </>
  );
};

export default Sewakan;
