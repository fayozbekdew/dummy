import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Profile() {
  const {state: user} = useLocation()
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-4xl w-full">
        <div className="flex items-center space-x-6 mb-4">
          <img
            src={user.image}
            alt={`${user.firstName}'s avatar`}
            className="w-24 h-24 rounded-full object-cover border-2 border-gray-300"
          />
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-gray-600">Username: {user.username}</p>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Phone: {user.phone}</p>
            <p className="text-gray-600">Gender: {user.gender}</p>
          </div>
        </div>

        {/* Personal Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">
              Personal Information
            </h3>
            <p className="text-gray-600">Age: {user.age}</p>
            <p className="text-gray-600">Birth Date: {user.birthDate}</p>
            <p className="text-gray-600">Blood Group: {user.bloodGroup}</p>
            <p className="text-gray-600">Height: {user.height} cm</p>
            <p className="text-gray-600">Weight: {user.weight} kg</p>
            <p className="text-gray-600">Eye Color: {user.eyeColor}</p>
            <p className="text-gray-600">
              Hair: {user.hair.color}, {user.hair.type}
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="font-semibold text-gray-700 mb-2">Address</h3>
            <p className="text-gray-600">{user.address.address}</p>
            <p className="text-gray-600">
              {user.address.city}, {user.address.state}{" "}
              {user.address.postalCode}
            </p>
            <p className="text-gray-600">{user.address.country}</p>
          </div>
        </div>

        {/* Education & Work */}
        <div className="mt-6">
          <h3 className="font-semibold text-gray-700 mb-2">Education</h3>
          <p className="text-gray-600">{user.university}</p>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-gray-700 mb-2">Work Information</h3>
          <p className="text-gray-600">Company: {user.company.name}</p>
          <p className="text-gray-600">Title: {user.company.title}</p>
          <p className="text-gray-600">Department: {user.company.department}</p>
          <p className="text-gray-600">
            Address: {user.company.address.address}, {user.company.address.city}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
