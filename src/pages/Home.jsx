import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl text-center p-6 bg-white shadow-lg rounded-lg my-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Dummy App!</h1>
        <p className="text-gray-600 text-lg mb-6">
          This platform allows you to manage products, users, posts, and todos efficiently. Navigate through different sections using the menu.
        </p>
        <div className="flex justify-center mt-6 space-x-4">
          <a
            href="/products"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Explore Products
          </a>
          <a
            href="/posts"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          >
            View Posts
          </a>
        </div>
        
      </div>
      <div className="max-w-4xl text-center p-6 bg-white shadow-lg rounded-lg my-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-100 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-600">Products Management</h3>
            <p className="text-gray-600 mt-2">Manage all your products efficiently in one place.</p>
          </div>
          <div className="p-4 bg-green-100 rounded-lg">
            <h3 className="text-xl font-semibold text-green-600">User Management</h3>
            <p className="text-gray-600 mt-2">Keep track of all registered users and their activities.</p>
          </div>
          <div className="p-4 bg-purple-100 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-600">Content Management</h3>
            <p className="text-gray-600 mt-2">Manage posts and todos in an organized manner.</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl text-center p-6 bg-white shadow-lg rounded-lg my-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="text-gray-600 italic">
              "This platform has significantly improved the way we manage our content and users. Highly recommend!"
            </p>
            <p className="text-blue-600 font-semibold mt-2">- User 123</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg shadow">
            <p className="text-gray-600 italic">
              "Very intuitive and easy to use. I love the sleek design and fast performance!"
            </p>
            <p className="text-blue-600 font-semibold mt-2">- User 456</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl text-center p-6 bg-white shadow-lg rounded-lg my-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Platform Statistics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-yellow-100 rounded-lg">
            <h3 className="text-2xl font-bold text-yellow-600">1,500+</h3>
            <p className="text-gray-600">Products Managed</p>
          </div>
          <div className="p-4 bg-red-100 rounded-lg">
            <h3 className="text-2xl font-bold text-red-600">500+</h3>
            <p className="text-gray-600">Registered Users</p>
          </div>
          <div className="p-4 bg-indigo-100 rounded-lg">
            <h3 className="text-2xl font-bold text-indigo-600">10,000+</h3>
            <p className="text-gray-600">Posts Created</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
