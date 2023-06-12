import React from "react";

const Card: React.FC = () => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://pinhome-blog-assets-public.s3.amazonaws.com/2021/12/img_61aa254c02efd.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Villa Griya Indah</h2>
        <p>Malang</p>
        <p>Rp 1.000.000/malam</p>
        <div className="card-actions justify-end">
          <button className="btn bg-blue-500">Detail</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
