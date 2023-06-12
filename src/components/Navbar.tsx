import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-blue-500 w-screen fixed top-0">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <img src="../assets/logoais.png" alt="Logo" className="Home" />
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://marriedwikibio.com/wp-content/uploads/2020/12/Song-Joong-Ki.jpg"
                alt="Profile"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">Profil</a>
            </li>
            <li>
              <a>Pesanan Saya</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
