import React, { useState } from 'react';

const FormComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    address: '',
    phoneno: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    // Name validation
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required.';
      formIsValid = false;
    }

    // Gender validation
    if (formData.gender === '') {
      newErrors.gender = 'Please select a gender.';
      formIsValid = false;
    }

    // Address validation
    if (formData.address.trim() === '') {
      newErrors.address = 'Address is required.';
      formIsValid = false;
    }

    // Phone number validation
    if (formData.phoneno.trim() === '') {
      newErrors.phoneno = 'Phone number is required.';
      formIsValid = false;
    }

    // Email validation
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required.';
      formIsValid = false;
    } else {
      // Basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Invalid email format.';
        formIsValid = false;
      }
    }

    // Password validation
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required.';
      formIsValid = false;
    } else {
      // Password complexity validation
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(formData.password)) {
        newErrors.password =
          'Password must be at least 8 characters long and contain at least one letter and one number.';
        formIsValid = false;
      }
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Perform form submission logic
      console.log('Form submitted:', formData);

      // Clear form data
      setFormData({
        name: '',
        gender: '',
        address: '',
        phoneno: '',
        email: '',
        password: ''
      });

      // Clear errors
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && <span>{errors.gender}</span>}
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        ></textarea>
        {errors.address && <span>{errors.address}</span>}
      </div>

      <div>
        <label htmlFor="phoneno">Phone Number:</label>
        <input
          type="text"
          id="phoneno"
          name="phoneno"
          value={formData.phoneno}
          onChange={handleInputChange}
        />
        {errors.phoneno && <span>{errors.phoneno}</span>}
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
