import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <div className='flex flex-1 space-x-4 px-4 py-2'>
          
          <Link href="login">Login</Link>
          <Link href="signup">SignUp</Link>
    </div>
  )
}

export default Navbar