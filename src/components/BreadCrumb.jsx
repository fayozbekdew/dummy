import React from "react";
import { useLocation,Link } from "react-router-dom";

function BreadCrumb() {
    const {pathname} = useLocation()
    let bread = pathname.split('/').slice(1)
    console.log(bread)
  return (
   <div className="bg-slate-500 sticky top-[58px]">

   <div className="breadcrumbs text-sm w-full max-w-[1300px] mx-auto  ">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {bread.map((item, index) => (
          <li key={index}>
            <Link to={`/${bread.slice(0, index + 1).join('/')}`}>
            {item.charAt().toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
        </div>
  );
}

export default BreadCrumb;
