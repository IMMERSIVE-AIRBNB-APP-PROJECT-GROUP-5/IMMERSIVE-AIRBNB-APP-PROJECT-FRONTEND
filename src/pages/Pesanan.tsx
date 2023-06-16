import React from "react";
import Navbar from "../components/NavbarWS";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Pesanan = () => {
  return (
    <>
      <Navbar label="Pesanan Saya" />
      <div className="w-[80%] mx-auto mt-28">
        <button className="btn btn-info text-white px-10">Pesanan Aktif</button>
      </div>
      <div className="collapse bg-white shadow-xl w-[80%] mx-auto mt-10">
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

      <hr className="my-20 border-t-2 border-gray-500 w-[80%] mx-auto" />

      <div className="w-[80%] mx-auto">
        <button className="btn btn-info text-white px-10">
          Pesanan Selesai
        </button>
      </div>
      <div className="collapse bg-white shadow-xl w-[80%] mx-auto mt-10">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          <h1 className="text-2xl font-bold">Villa Griya Indah</h1>
          <p className="text-sm font-light my-2">Malang</p>
          <p className="text-sm font-light">
            Jumat,03 Maret 2023 Sabtu,04 Maret 2023
          </p>
          <div className="flex justify-end">
            <Link to="/Riview">
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded mr-3">
                Berikan Review
              </button>
            </Link>
          </div>
        </div>
        <div className="collapse-content">
          <p className="text-sm font-light">Nomor Pesanan : ashjdjhsf1234</p>
        </div>
      </div>
      <div className="mt-32">
        <Footer />
      </div>
    </>
  );
};

export default Pesanan;
