import React, { useState, useEffect } from "react";
import axios from "axios";
import avatarImage from "../assets/Avatar 1.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
}

const ProfilePage: React.FC = () => {
  const [user, setUser] = useState<User>({
    id: 0,
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await axios.get("http://35.193.64.69/users");
      const userData: User = response.data;
      setUser(userData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const updateUser = async () => {
    try {
      await axios.put(`http://35.193.64.69/users/${user.id}`, user);
      console.log("User updated successfully!");
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUser = async () => {
    try {
      await axios.delete(`http://35.193.64.69/users/${user.id}`);
      console.log("User deleted successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    await updateUser();
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-start mt-10 mb-10">
        <div className="w-1/2 bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-4">
            <img
              src={avatarImage}
              alt="Avatar"
              className="w-10 h-10 rounded-full mr-2"
            />
            <div>
              <div className="ml-auto">
                <button
                  className="bg-red-500 text-white rounded px-4 py-2"
                  onClick={deleteUser}
                >
                  Hapus Akun
                </button>
              </div>
            </div>
          </div>
          {isEditing ? (
            <div>
              <div className="mb-4">
                <label className="mb-2 block">Name:</label>
                <input
                  className="border border-gray-400 rounded px-2 py-1 w-full bg-gray-200"
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block">Email:</label>
                <input
                  className="border border-gray-400 rounded px-2 py-1 w-full bg-gray-200"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block">Phone Number:</label>
                <input
                  className="border border-gray-400 rounded px-2 py-1 w-full bg-gray-200"
                  type="tel"
                  name="phoneNumber"
                  value={user.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <label className="mb-2 block">Password:</label>
                <input
                  className="border border-gray-400 rounded px-2 py-1 w-full bg-gray-200"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-green-500 text-white rounded px-4 py-2 mr-2"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 text-white rounded px-4 py-2"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="mb-2">
                <span className="font-bold">Name:</span> {user.name}
              </p>
              <p className="mb-2">
                <span className="font-bold">Email:</span> {user.email}
              </p>
              <p className="mb-2">
                <span className="font-bold">Phone Number:</span>{" "}
                {user.phoneNumber}
              </p>
              <p className="mb-2">
                <span className="font-bold">Password:</span> {user.password}
              </p>
              <div className="flex justify-end mt-4">
                <button
                  className="bg-blue-500 text-white rounded px-4 py-2"
                  onClick={handleEdit}
                >
                  Edit
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
