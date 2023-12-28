'use client'
import Link from 'next/link'
import React, { useState, FormEvent, ChangeEvent } from 'react'
import { FormDataType, ErrorDataType } from '../types/formTypes'
import { validateForm } from '../utils/form'

const SignupPageView = () => {
 const [formData, setFormData] = useState<FormDataType>({
   email: '',
   username:'',
   password: '',
   confirmPassword:'',
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
    <div className='rounded-md dark:bg-slate-900 px-6 py-6 shadow-lg'>
      <h1 className='text-center text-2xl p-4 text-violet-600 dark:text-violet-500'>Sign Up</h1>
        <form className='' onSubmit={handleSubmit}>
        <div className='flex flex-col space-y-3 '>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            className="block w-full rounded-lg border-0 py-2 pl-7 pr-20  dark:bg-slate-600 dark:text-slate-200 ring-1 ring-inset ring-slate-400 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
            placeholder='username' />
          {errors.username && <span className="error-message">{errors.username}</span>}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="block w-full rounded-lg border-0 py-2 pl-7 pr-20  dark:bg-slate-600 dark:text-slate-200 ring-1 ring-inset ring-slate-400 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
            placeholder='example@example.com' />
          {errors.email && <span className="error-message">{errors.email}</span>}
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="block w-full rounded-lg border-0 py-2 pl-7 pr-20  dark:bg-slate-600 dark:text-slate-200 ring-1 ring-inset ring-slate-400 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
            placeholder='password' />
          {errors.password && <span className="error-message">{errors.password}</span>}
          <input
            type="confrimPassword"
            id="confrimPassword"
            name="confrimPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="block w-full rounded-lg border-0 py-2 pl-7 pr-20  dark:bg-slate-600 dark:text-slate-200 ring-1 ring-inset ring-slate-400 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
            placeholder='Confirm Password' />
          {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
          <button className="text-white bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-2xl py-2" type="submit" >Sing Up</button>
          </div>
      </form>
      {generalError && <p className="form-error">{generalError}</p>}
        <p className="text-xs font-light py-5">
          Already have an Account? <Link href="login" className='text-xs font-light'> Login </Link>
        </p>
      </div>
  )
}

export default SignupPageView