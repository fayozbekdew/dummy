import React, { Fragment, useEffect, useState } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";

function Users() {
  const [data, setData] = useState([]);
  const getUsers = async () => {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    setData(data.users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  const search = (word) => {
    if (word === "") {
      getUsers();
    } else {
      fetch(`https://dummyjson.com/users/search?q=${word}`)
        .then((res) => res.json())
        .then(data => setData(data.users))
        .catch(err => console.log(err))
    }
  };
  return (
    <div className="w-full max-w-[1300px] mx-auto">
      <div className="flex items-center justify-between p-4">
        <h1 className="my-3 text-3xl">Users</h1>
        <label className="input input-bordered flex items-center gap-2">
          <input
            onChange={(e) => search(e.target.value)}
            type="text"
            className="grow w-[300px]"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      {
        data.length > 0 ?
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
          <Fragment key={item.id}>
            <Card product={item} type="user" />
          </Fragment>
        ))}
      </div>
        : <Loader/>
      }
      
    </div>
  );
}

export default Users;
