import React from "react";
import heroimg from "../../public/Image 1.png";
import subimg1 from "../../public/Image 2.png";
import subimg2 from "../../public/Image 3.png";
import subimg3 from "../../public/Image 4.png";
import icon1 from "../../public/Fork knife 1.png";
import icon2 from "../../public/Monitor 1.png";
import icon3 from "../../public/Wifi high 1.png";
import icon4 from "../../public/Snowflake 1.png";
import icon5 from "../../public/water.png";
import rating from "../../public/Rating 1.png";
import avatar from "../../public/Avatar 1.png";

const Herodetail = () => {
  return (
    <>
      <div>
        <div className="ml-[5rem] mt-10">
          <h2 className="text-3xl font-semibold">Villa Griya Indah</h2>
          <p className="mt-2">
            <span className="font-bold text-base ">4.84 </span> Malang, Jawa
            Timur, Indonesia
          </p>
        </div>

        <div className="flex justify-center item-center mt-7">
          <img src={heroimg} alt="" className="" />
          <div className="flex flex-col">
            <img src={subimg1} alt="" className="mb-3 mx-3" />
            <img src={subimg2} alt="" className="mb-3 mx-3" />
            <img src={subimg3} alt="" className="mt-3 mx-3" />
          </div>
        </div>
      </div>

      <div className="mb-20 flex">
        <div className="ml-[5rem] mt-10 w-1/2">
          <h2 className="text-3xl font-semibold mb-5">Deskripsi</h2>
          <p className="text-xl font-semibold">
            <i className="bx bx-home text-3xl text-sky-500"></i> 6 Guests • 4
            beds •
          </p>
          <p className="mt-10 leading-8 text-base font-light w-[80%]">
            Pilihan akomodasi ideal untuk Backpacker, Liburan Keluarga dan
            Pasangan. RedDoorz Plus near Mall Bali Galeria 2 dilengkapi oleh
            beragam fasilitas penunjang kenyamanan - seperti Desk, Water Heater,
            Kolam Renang Outdoor, Kamar Non Smoking, Restooran, Room Service,
            Front Desk 24 Jam and Area Parkir Mobil. Lokasi Guest House juga
            dikelilingi oleh beragam pusat wisata, perbelanjaan dan hiburan
            utama - seperti Dream Museum Zone Bali (2,9 km), Double Six Beach
            (4,6 km), Upside Down World Bali (3,6 km), Pantai Kuta (5,4 km),
            Waterbom Bali (6,3 km), La Plancha (6 km) dan Ku De Ta (6,7 km).
          </p>

          <h2 className="text-3xl font-semibold my-10">Fasilitas</h2>
          <div>
            <h4 className="flex items-center mb-5 text-lg">
              <img src={icon1} alt="" className="mr-10" /> Dapur
            </h4>
            <h4 className="flex items-center mb-5 text-lg">
              <img src={icon2} alt="" className="mr-10" /> TV
            </h4>
            <h4 className="flex items-center mb-5 text-lg">
              <img src={icon4} alt="" className="mr-10" /> Air conditioning
            </h4>
            <h4 className="flex items-center mb-5 text-lg">
              <img src={icon3} alt="" className="mr-10" /> Wifi
            </h4>
            <h4 className="flex items-center mb-5 text-lg">
              <img src={icon5} alt="" className="mr-10" /> Kolam renang
            </h4>
          </div>
        </div>

        <div className="card w-[40%] h-[500px] bg-base-100 shadow-2xl">
          <div className="card-body">
            <h2 className="card-title">Rp.1.000.00/Permalam</h2>
            <div className="flex justify-between mt-5">
              <div>
                <h5 className="font-semibold text-base">Check in</h5>
                <p className="text-sm">17/07/2023</p>
              </div>
              <div>
                <h5 className="font-semibold text-base">Check out</h5>
                <p className="text-sm">21/07/2023</p>
              </div>
            </div>
            <div className="flex my-5">
              <h5 className="font-semibold text-base">Status :</h5>
              <p className="pl-5">Tersedia</p>
            </div>
            <div className="flex justify-between mt-5">
              <div>
                <h5 className="font-light text-base">Rp.1.000.000</h5>
              </div>
              <div>
                <p className="font-light text-base">Rp.1.000.000</p>
              </div>
            </div>
            <div className="flex justify-between mt-10">
              <div>
                <h5 className="font-semibold text-base">Total</h5>
              </div>
              <div>
                <p className="font-light text-base">Rp.1.000.000</p>
              </div>
            </div>
            <div className="card-actions justify-center mt-10">
              <button className="btn btn-info px-36 text-white">Reserve</button>
            </div>
            <div className="text-center mt-4">
              <a href="#" className="text-gray-400">
                You won't be charged yet
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="ml-[5rem] mt-10">
          <div className="inline-flex">
            <img src={rating} alt="" className="w-10" />
            <h2 className="text-3xl font-semibold">
              {" "}
              4.84{" "}
              <span className="font-normal text-slate-400">(324 reviews)</span>
            </h2>
          </div>

          <div className="w-1/2 mb-14">
            <div className="flex items-center mt-10">
              <img src={avatar} alt="" />
              <div className="mx-5">
                <p className="font-semibold text-lg">Frank Rutherford</p>
                <p className="text-slate-400">February 2022</p>
              </div>
              <img src={rating} alt="" /> 5
            </div>
            <h3 className="text-base mt-3 text-slate-500">
              Amet ex ea duis magna est Lorem id eiusmod nulla in exercitation
              dolore reprehenderit eiusmod non
            </h3>

            <div className="flex items-center mt-10">
              <img src={avatar} alt="" />
              <div className="mx-5">
                <p className="font-semibold text-lg">Frank Rutherford</p>
                <p className="text-slate-400">February 2022</p>
              </div>
              <img src={rating} alt="" /> 5
            </div>
            <h3 className="text-base mt-3 text-slate-500">
              Amet ex ea duis magna est Lorem id eiusmod nulla in exercitation
              dolore reprehenderit eiusmod non
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Herodetail;
