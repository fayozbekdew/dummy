import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function FullUserAbout() {
    const [user,setUser] = useState([])
    const {id} = useParams()
    const getData = async () => {
        const res = await fetch(`https://dummyjson.com/users/${id}`)
        const data = await res.json()
        setUser(data)
    }
    useEffect(() => {
        getData()
    },[])
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <div className="flex items-center space-x-6">
            <img
              className="w-32 h-32 rounded-full"
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
            />
            <div>
              <h2 className="text-2xl font-bold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-gray-600">{user.company?.title}</p>
              <p className="text-gray-600">{user.company?.name}</p>
            </div>
          </div>
    
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-800">
                  <strong>Age:</strong> {user.age}
                </p>
                <p className="text-gray-800">
                  <strong>Email:</strong> {user.email}
                </p>
                <p className="text-gray-800">
                  <strong>Phone:</strong> {user.phone}
                </p>
                <p className="text-gray-800">
                  <strong>Gender:</strong> {user.gender}
                </p>
                <p className="text-gray-800">
                  <strong>Blood Group:</strong> {user.bloodGroup}
                </p>
                <p className="text-gray-800">
                  <strong>Eye Color:</strong> {user.eyeColor}
                </p>
              </div>
              <div>
                <p className="text-gray-800">
                  <strong>Height:</strong> {user.height} cm
                </p>
                <p className="text-gray-800">
                  <strong>Weight:</strong> {user.weight} kg
                </p>
                <p className="text-gray-800">
                  <strong>Hair:</strong> {user.hair?.color} ({user.hair?.type})
                </p>
                <p className="text-gray-800">
                  <strong>IP Address:</strong> {user.ip}
                </p>
                <p className="text-gray-800">
                  <strong>University:</strong> {user.university}
                </p>
              </div>
            </div>
          </div>
    
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <p className="text-gray-800">
              {user.address?.address}, {user.address?.city}, {user.address?.state},{" "}
              {user.address?.country} - {user.address?.postalCode}
            </p>
          </div>
    
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Bank Information</h3>
            <p className="text-gray-800">
              <strong>Card Number:</strong> {user.bank?.cardNumber}
            </p>
            <p className="text-gray-800">
              <strong>Card Type:</strong> {user.bank?.cardType}
            </p>
            <p className="text-gray-800">
              <strong>Card Expiry:</strong> {user.bank?.cardExpire}
            </p>
            <p className="text-gray-800">
              <strong>IBAN:</strong> {user.bank?.iban}
            </p>
          </div>
    
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Crypto Wallet</h3>
            <p className="text-gray-800">
              <strong>Coin:</strong> {user.crypto?.coin}
            </p>
            <p className="text-gray-800">
              <strong>Wallet Address:</strong> {user.crypto?.wallet}
            </p>
            <p className="text-gray-800">
              <strong>Network:</strong> {user.crypto?.network}
            </p>
          </div>
    
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">Company Information</h3>
            <p className="text-gray-800">
              <strong>Department:</strong> {user.company?.department}
            </p>
            <p className="text-gray-800">
              <strong>Company Name:</strong> {user.company?.name}
            </p>
            <p className="text-gray-800">
              <strong>Company Address:</strong> {user.company?.address?.address},{" "}
              {user.company?.address.city}, {user.company?.address?.state},{" "}
              {user.company?.address.country} - {user.company?.address?.postalCode}
            </p>
          </div>
        </div>
      );
}

export default FullUserAbout