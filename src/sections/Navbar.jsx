import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData,setUserData] = useState({})
  const navigate = useNavigate();
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const token = localStorage.getItem('accessToken')
  console.log(token)
useEffect(() => {
  fetch('https://dummyjson.com/user/me', {
  method: 'GET',
  headers: {
    'Authorization': token, 
  }, 
})
.then(res => res.json())
.then(data => setUserData(data))
.catch(err => console.log(err))
},[])
  return (
    <div className="border-b-2 border-x-white sticky top-0 z-10 bg-slate-900">
      <div className="flex mx-auto justify-between p-4 w-full max-w-[1300px] ">
        <Link to="/">DUMMY</Link>
        <nav className="flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/users"> Users</NavLink>
          <NavLink to="/posts">Posts</NavLink>
          <NavLink to="/todos">Todos</NavLink>
          <button
            onClick={toggleModal}
            className="relative bg-blue-600 w-9 h-9 rounded-full  transition duration-300"
          >
            <img src={userData.image} className="w-full h-full rounded-full" alt="" />
          </button>
          {isModalOpen && (
            <div className="absolute right-0 mt-12 w-48 bg-white text-gray-800 rounded-lg shadow-lg py-2 z-10">
              <a
                onClick={() => navigate('/profile', {state: userData})}
                className="block px-4 py-2 hover:bg-gray-200 transition duration-150"
              >
                My Profile
              </a>
              <a
                onClick={() => {localStorage.clear(); navigate('/login')}} 
                className="block px-4 py-2 hover:bg-gray-200 transition duration-150"
              >
                Sign Out
              </a>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
