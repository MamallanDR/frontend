import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const CreateUser = useCallback(async (data) => {
    try {
      const response = await axios.post(`/api/user`, data);
      console.log('User created:', response.data);
      alert('User registered successfully!');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Failed to create user. Please try again.');
    }
  }, []);

  const onSubmit = (data) => {
    CreateUser(data);
  };

  const validationRules = {
    name: { required: 'Name is required' },
    age: {
      required: 'Age is required',
      valueAsNumber: true,
      min: {
        value: 1,
        message: 'Age must be at least 1'
      }
    },
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: 'Enter a valid email'
      }
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-2xl font-bold text-center">Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            {...register('name', validationRules.name)}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.name && (
            <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Age */}
        <div>
          <label className="block mb-1 font-medium">Age</label>
          <input
            type="number"
            {...register('age', validationRules.age)}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.age && (
            <p className="text-red-600 text-sm mt-1">{errors.age.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            {...register('email', validationRules.email)}
            className="w-full border border-gray-300 rounded p-2"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
