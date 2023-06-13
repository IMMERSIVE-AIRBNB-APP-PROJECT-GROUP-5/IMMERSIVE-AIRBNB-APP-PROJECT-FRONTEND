import React from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card: React.FC = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://pinhome-blog-assets-public.s3.amazonaws.com/2021/12/img_61aa254c02efd.jpg"
          alt="Gambar Villa"
        />
      </figure>
      <div className="card-body grid grid-cols-2 items-center">
        <h2 className="card-title">Villa Griya</h2>
        <div className="flex items-center justify-end">
          <span className="text-yellow-500 font-semibold">4.5</span>
          <BsStarFill className="text-yellow-500 ml-1" />
        </div>
        <p className="col-span-2">Malang</p>
        <p className="col-span-2">Rp 1.000.000/malam</p>
        <p className="col-span-2"></p>
        <div className="card-actions justify-end col-span-2">
          <Link to="/detail" className="btn bg-blue-500">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
