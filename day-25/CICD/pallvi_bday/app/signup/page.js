import React from 'react'

function LabelledInput({ label, type = 'text', placeholder }) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-200"
      />
    </div>
  )
}

export default function Signup() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-50">
      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <div className="px-6 text-center">
          <div className="text-3xl font-extrabold mb-6">Sign up</div>

          <LabelledInput label="Username" placeholder="harkirat@gmail.com" />
          <LabelledInput label="Password" type="password" placeholder="123456" />

          <button
            type="button"
            className="mt-6 w-full text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}
