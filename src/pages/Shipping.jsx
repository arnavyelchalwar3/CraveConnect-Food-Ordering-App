import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipping = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNo: '',
    address: '',
    landmark: '',
    pincode: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear the error when the user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    setErrors(formErrors);
    if (Object.keys(formErrors).length === 0) {
      console.log(formData); // Log form data to console
      // Navigate to another component here
    }
  };

  const validateForm = (data) => {
    let errors = {};
    if (!data.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!data.phoneNo.trim()) {
      errors.phoneNo = 'Phone No is required';
    } else if (!/^\d{10}$/.test(data.phoneNo.trim())) {
      errors.phoneNo = 'Phone No is invalid';
    }
    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }
    if (!data.landmark.trim()) {
      errors.landmark = 'Landmark is required';
    }
    if (!data.pincode.trim()) {
      errors.pincode = 'Pincode is required';
    }
    return errors;
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <form onClick={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-1" htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="phoneNo">Phone No</label>
          <input
            type="text"
            id="phoneNo"
            name="phoneNo"
            value={formData.phoneNo}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${errors.phoneNo ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {errors.phoneNo && <p className="text-red-500">{errors.phoneNo}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded`}
          ></textarea>
          {errors.address && <p className="text-red-500">{errors.address}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="landmark">Landmark</label>
          <input
            type="text"
            id="landmark"
            name="landmark"
            value={formData.landmark}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${errors.landmark ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {errors.landmark && <p className="text-red-500">{errors.landmark}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="pincode">Pincode</label>
          <input
            type="text"
            id="pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className={`w-full px-3 py-2 border ${errors.pincode ? 'border-red-500' : 'border-gray-300'} rounded`}
          />
          {errors.pincode && <p className="text-red-500">{errors.pincode}</p>}
        </div>
        <Link to="/success" className="text-blue-500">     
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
        </Link>
      </form>

    </div>
  );
};

export default Shipping;
