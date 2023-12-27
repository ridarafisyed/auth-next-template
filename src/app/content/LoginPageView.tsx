'use client'
import Link from 'next/link'
import React, { useState, FormEvent, ChangeEvent } from 'react'
import { ValidDataType, FormDataType, ErrorDataType } from '../types/formTypes'
import { validateForm } from '../utils/form'


const LoginPageView = () => {
 const [formData, setFormData] = useState<FormDataType>({
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState<ErrorDataType>({});
  const [generalError, setGeneralError] = useState<string>('');
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the associated error when the user starts typing
    setErrors({});
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const errors = validateForm(formData)
    console.log(errors)
    
    
      try {
      // Your login logic here
      // For example, you might use formData.email and formData.password to make an API call
      console.log('Logging in with:', formData);
      } catch (error) {
       setGeneralError("Failed to Signup Please try again later")
      console.error('Login error:', error);
    }
    
  };

  return (
    <div className='rounded-md bg-zinc-800 px-6 py-6'>
      <h1 className='text-center text-2xl p-4'>Log In</h1>
        <form className='' onSubmit={handleSubmit}>
          <div className='flex flex-col space-y-3 shadow-md '>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full rounded-lg border-0 py-2 pl-7 pr-20 dark:text-gray-200 ring-1 ring-inset ring-zinc-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
            placeholder='example@example.com' />
          {errors.email && <span className="error-message">{errors.email}</span>}
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="block w-full rounded-lg border-0  pl-7 pr-20 dark:text-gray-200 ring-1 ring-inset ring-zinc-800 placeholder:text-gray-400 py-2 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
            placeholder='password' />
          {generalError && <span className="error-message">{generalError}</span>}
          <button className="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-2xl py-2" type="submit" >Log In</button>

          <Link href="#" className='text-xs font-light'>Forget Password?</Link>
          

          </div>
      </form>
      {errors.systemError && <span className="error-message">{errors.systemError}</span>}
        <p className="text-xs font-light">
          Don't have an account? <Link href="signup" className='text-xs font-light'> Signup </Link>
        </p>
      </div>
  )
}

export default LoginPageView