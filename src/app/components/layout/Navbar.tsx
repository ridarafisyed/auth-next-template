
import Link from 'next/link'
import  ThemeSwitcher  from './ToggleButton'

const Navbar = () => {
  return (
      <div className='flex flex-1 space-x-4 px-4 py-2 justify-between text-violet-600 dark:text-violet-500'>  
        
      <div className='space-x-4'>
        <h1 className='text-xl font-bold'>AUTH TEMPLATE</h1>
        
      </div >
      <div className='space-x-4'>
        <ThemeSwitcher />
        <Link href="login">Login</Link>
        <Link href="signup">SignUp</Link>
       
      </div>
    </div>
  )
}

export default Navbar