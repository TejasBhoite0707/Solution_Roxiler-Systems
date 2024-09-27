import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
     <nav className='bg-amber-100 shadow-lg fixed w-full top-0 h-16 p-3 z-10 '>
        <div className='container mx-auto flex justify-between items-center h-full'>
     <Link to='/'><h1 className='text-2xl font-bold text-green-700 hover:text-green-950'>Trasition Details</h1></Link>   
       <div className='flex space-x-8'>
        <Link to='/dashboard' className=' bg-green-600 text-white transition duration-300 rounded-md px-3 py-1 ease-in-out  hover:bg-green-800 hover:text-yellow-300'>Dashboard</Link>
        <Link to='/statistics' className=' bg-green-600 text-white transition duration-300 rounded-md px-3 py-1 ease-in-out hover:bg-green-800 hover:text-yellow-300'>Statistics</Link>
        <Link to='/barchart'  className=' bg-green-600 text-white transition duration-300 rounded-md px-3 py-1 ease-in-out hover:bg-green-800 hover:text-yellow-300'>Barchart</Link>
       </div>
        </div>
     
    </nav> 
    </div>
  )
}

export default Navbar
