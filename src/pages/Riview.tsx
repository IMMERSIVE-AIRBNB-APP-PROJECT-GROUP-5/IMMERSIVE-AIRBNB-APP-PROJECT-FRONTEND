import React from "react";
import Navbar from "../components/NavbarWS";
import Footer from "../components/Footer";

const Riview = () => {
  return (
    <>
      <Navbar label="Review" />
      <div className="collapse bg-white shadow-xl w-[70%] mx-auto mt-10">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h1 className="text-2xl font-bold">Villa Griya Indah</h1>
          <p className="text-sm font-light my-2">Malang</p>
          <p className="text-sm font-light">
            Jumat,03 Maret 2023 Sabtu,04 Maret 2023
          </p>
        </div>
        <div className="collapse-content">
          <p className="text-sm font-light">Nomor Pesanan : ashjdjhsf1234</p>
        </div>
      </div>

      <div className="w-[70%] mx-auto">
        <h1 className="text-3xl font-bold mt-14">
          Berapa Nilai untuk penginapan ini?
        </h1>
        <div className="rating mt-10">
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-sky-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-sky-500"
            checked
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-sky-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-sky-500"
          />
          <input
            type="radio"
            name="rating-4"
            className="mask mask-star-2 bg-sky-500"
          />
        </div>
      </div>

      <div className="w-[70%] mx-auto">
        <h1 className="text-3xl font-bold mt-14">
          Bagaimana pengalaman menginapmu?
        </h1>
        <textarea
          placeholder="Yuk ceritakan pengalamanmu disini ...."
          className="textarea textarea-bordered textarea-lg w-full mt-10"
        ></textarea>
        <div className="flex justify-end mb-44 mt-10">
          <button className="btn btn-info">Simpan</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Riview;
