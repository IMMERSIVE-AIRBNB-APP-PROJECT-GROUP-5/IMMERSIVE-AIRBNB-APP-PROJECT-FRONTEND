import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import API from "../axios/API";

interface CardProps {}

interface HomeStayData {
  url: string;
  homestay_name: string;
  city_name: string;
  rating: number;
  price: string;
}

const Card: React.FC<CardProps> = () => {
  const [homeStayData, setHomeStayData] = useState<HomeStayData | null>(null);

  useEffect(() => {
    // Fungsi untuk mendapatkan data penginapan dari server
    const fetchHomeStayData = async () => {
      try {
        const response = await API.getHomeStayData();
        setHomeStayData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHomeStayData();
  }, []);

  if (!homeStayData) {
    return <div>Loading...</div>; // Tampilkan pesan loading atau komponen skeleton jika data masih diambil dari server
  }

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={homeStayData.url} alt="Gambar Villa" />
      </figure>
      <div className="card-body grid grid-cols-2 items-center">
        <h2 className="card-title">{homeStayData.homestay_name}</h2>
        <div className="flex items-center justify-end">
          <span className="text-yellow-500 font-semibold">
            {homeStayData.rating}
          </span>
          <BsStarFill className="text-yellow-500 ml-1" />
        </div>
        <p className="col-span-2">{homeStayData.city_name}</p>
        <p className="col-span-2">{homeStayData.price}</p>
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
