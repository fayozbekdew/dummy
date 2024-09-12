import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { ArrowRight } from "../assets";
import Card from "../components/Card";
import Loader from "../components/Loader";

function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loader,setLoader]= useState(false)
  const [activePage, setActivePage] = useState("");
  const getCategory = async () => {
    const res = await fetch("https://dummyjson.com/products/categories");
    const data = await res.json();
    setCategory(data);
  };
  const getCategoryData = async (activePage) => {
    const res = await fetch(activePage || 'https://dummyjson.com/products?limit=100');
    const data = await res.json();
    setProducts(data);
    setLoader(false)
  };
  useEffect(() => {
    getCategory();
  }, []);
  useEffect(() => {
    getCategoryData(activePage);
    setLoader(true)
  }, [activePage]);
  console.log(products);
  return (
    category.length > 0 && products?.products?.length > 0 ?
    <div className="flex h-screen">
      <div className="w-72 bg-gray-800 text-white fixed h-full overflow-y-auto">
        <h2 className="text-xl text-center font-bold p-4">Categories</h2>
        <ul className="px-4 flex flex-col gap-y-2 ">
        <li onClick={() => setActivePage('https://dummyjson.com/products?limit=100')} className="flex items-center justify-between py-[1px] pl-2 cursor-pointer hover:scale-[1.008] hover:bg-gray-700">
            <p>All products</p>
            <img src={ArrowRight} alt="arrow" className="w-4 h-4" />
        </li>
          {category.map((item, index) => (
            <Fragment key={crypto.randomUUID()}>
            <li onClick={() => setActivePage(item.url)} className="flex items-center justify-between py-[1px] pl-2 cursor-pointer hover:scale-[1.008] hover:bg-gray-700" key={index}>
                <p>{item.name}</p>
                <img src={ArrowRight} alt="arrow" className="w-4 h-4" />
            </li>
            </Fragment>
          ))}
        </ul>
      </div>
      {loader ? <Loader/> :
      <div className="ml-72 h-fit min-h-full flex-1 p-8">
        <h1 className="text-3xl font-bold mb-4">Product List</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.products?.map((item) => (
            <Card product={item} type="product"/>
          ))}
        </div>
      </div>}
    </div>
    : <Loader/>
  );
}

export default Products;
