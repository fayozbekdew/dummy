import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function Card({ product, type }) {
  switch (type) {
    case "product":
      return (
        <div
          key={product.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={product.thumbnail || Skeleton}
            alt={product.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold mb-2">{product.brand}</h2>
              <p>Rate: {product.rating}</p>
            </div>
            <p className="text-gray-700 mb-4">
              {product.description.slice(0, 110) + "..."}
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">{product.price}$</span>
              <Link
                to={`/products/${product.id}`}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Add to Cart
              </Link>
            </div>
          </div>
        </div>
      );
    case "user":
      return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={product.image}
            alt={`${product.firstName} ${product.lastName}`}
          />
          <div className="text-center mt-4">
            <h2 className="text-xl font-bold">
              {product.firstName} {product.lastName}
            </h2>
            <p className="text-gray-600">{product.company.title}</p>
            <p className="text-gray-600">{product.company.name}</p>
          </div>
          <div className="mt-4">
            <p className="text-gray-800">
              <strong>Age:</strong> {product.age}
            </p>
            <p className="text-gray-800">
              <strong>Email:</strong> {product.email}
            </p>
            <p className="text-gray-800">
              <strong>Phone:</strong> {product.phone}
            </p>
          </div>
          <Link
            to={`/users/${product.id}`}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 flex items-center justify-center mt-3 mx-auto"
          >
            Full review
          </Link>
        </div>
      );
    case "post":
      return (
        <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg my-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">{product.title}</h2>
            <div className="text-gray-500">{product.views} views</div>
          </div>
          <p className="text-gray-700 my-4">{product.body}</p>
          <div className="flex flex-wrap space-x-2">
            {product.tags?.map((tag, index) => (
              <span
                key={index}
                className="text-sm bg-blue-100 text-blue-500 rounded-full px-3 py-1"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="flex items-center space-x-4">
              <span className="text-green-500">
                👍 {product.reactions?.likes}
              </span>
              <span className="text-red-500">
                👎 {product.reactions?.dislikes}
              </span>
            </div>
            <div className="text-gray-500">User ID: {product.userId}</div>
          </div>
        </div>
      );
    case "todo":
      return (
        <div
          className={`max-w-2xl w-full mx-auto p-4 bg-white shadow-md rounded-lg my-4 ${
            product.completed ? "bg-green-100" : "bg-red-100"
          }`}
        >
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-medium">{product.todo}</h2>
            <div
              className={`text-sm font-semibold ${
                product.completed ? "text-green-500" : "text-red-500"
              }`}
            >
              {product.completed ? "Completed" : "Not Completed"}
            </div>
          </div>
          <div className="text-gray-500 mt-2">User ID: {product.userId}</div>
        </div>
      );
  }
}

export default Card;
