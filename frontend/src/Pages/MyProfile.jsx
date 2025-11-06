import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: 'richard123@gmail.com',
    phone: '+1 123 654 7890',
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London"
    },
    gender: 'Male',
    dob: '2000-01-25'
  })

  const [isEdit, setIsEdit] = useState(true)

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-10">
      {/* Profile Picture & Name */}
      <div className="flex flex-col items-center">
        <img
          src={userData.image}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500"
        />
        <div className="mt-4">
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={e =>
                setUserData(prev => ({ ...prev, name: e.target.value }))
              }
              className="text-center text-2xl font-semibold border-b border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          ) : (
            <p className="text-2xl font-semibold">{userData.name}</p>
          )}
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Contact Info */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          CONTACT INFORMATION
        </h2>
        <div className="space-y-4">
          <div>
            <p className="text-gray-500 text-sm">Email ID:</p>
            <p className="font-medium">{userData.email}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Phone:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={e =>
                  setUserData(prev => ({ ...prev, phone: e.target.value }))
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-indigo-500"
              />
            ) : (
              <p className="font-medium">{userData.phone}</p>
            )}
          </div>

          <div>
            <p className="text-gray-500 text-sm">Address:</p>
            {isEdit ? (
              <div className="space-y-2">
                <input
                  onChange={e =>
                    setUserData(prev => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value }
                    }))
                  }
                  value={userData.address.line1}
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-indigo-500"
                />
                <input
                  onChange={e =>
                    setUserData(prev => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value }
                    }))
                  }
                  value={userData.address.line2}
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-indigo-500"
                />
              </div>
            ) : (
              <p className="font-medium">
                {userData.address.line1}
                <br />
                {userData.address.line2}
              </p>
            )}
          </div>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      {/* Basic Info */}
      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">
          BASIC INFORMATION
        </h2>
        <div className="space-y-4">
          <div>
            <p className="text-gray-500 text-sm">Gender:</p>
            {isEdit ? (
              <select
                onChange={e =>
                  setUserData(prev => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
                className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-indigo-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="font-medium">{userData.gender}</p>
            )}
          </div>

          <div>
            <p className="text-gray-500 text-sm">Birthday:</p>
            {isEdit ? (
              <input
                type="date"
                onChange={e =>
                  setUserData(prev => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
                className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:border-indigo-500"
              />
            ) : (
              <p className="font-medium">{userData.dob}</p>
            )}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex justify-center">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg shadow hover:bg-gray-300 transition"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  )
}

export default MyProfile
