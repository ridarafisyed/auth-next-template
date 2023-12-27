'use client'
import React, { useState } from 'react'

const LoginPageView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
    console.log(email, password)
  }


  return (
     <div className=''>
        <h1 className='text-3xl font-bold leading-none text-gray-300 text-center my-6'>Log In</h1>
        <form className='' onSubmit={handleSubmit} >
          <div className='flex flex-col space-y-3 '>
          <input type="email" className='rounded-md px-2' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" className='rounded-md' placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
          <button className='' type="submit" >Log In</button>
          </div>
        </form>
      </div>
  )
}

export default LoginPageView