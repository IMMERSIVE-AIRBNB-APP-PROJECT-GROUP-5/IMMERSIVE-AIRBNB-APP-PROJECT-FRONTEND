import { FC } from "react";
import logo from "../../public/dais.png";
import avatar from "../../public/Avatar 1.png";
import { Link } from "react-router-dom";

interface ChildrenProps {
  label?: string;
}

const Navbar: FC<ChildrenProps> = ({ label }) => {
  return (
    <div className="navbar bg-sky-500">
      <div className="navbar-start">
        <img src={logo} alt="Logo" className="w-[60px] ml-10" />

        <h1 className="text-3xl text-white font-semibold">{label}</h1>
      </div>
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input max-w-xs lg:w-96"
          />
        </div>
      </div>
      <div className="navbar-end">
        <Link to="/login">
          <button className="bg-white hover:bg-blue-500 text-sky-500 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
            Login
          </button>
        </Link>

        <div className="mr-5">
          <Link to="/signup">
            <button className="bg-white hover:bg-blue-500 text-sky-500 font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">
              Daftar
            </button>
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={avatar} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-58"
          >
            <li>
              <a className="justify-between ">Profile Saya</a>
            </li>
            <li>
              <Link to="/pesanan">Pesanan Saya</Link>
            </li>
            <li>
              <Link to="/validasi">Mulai Sewakan</Link>
            </li>
            <li>
              <Link to="/home">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
