import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
     <nav className='bg-amber-100 shadow-md fixed w-full top-0 h-20 p-2 '>
        <div className='flex justify-between items-center h-full'>
     <Link to='/'><h1 className=''>Trasition Details</h1></Link>   
       <div className='flex space-x-8'>
        <Link to='/dashboard' className=' bg-green-600 text-white rounded-md px-3 py-1  hover:bg-green-800 hover:text-red-300'>Dashboard</Link>
        <Link to='/statistics' className=' bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-800 hover:text-red-300'>Statistics</Link>
        <Link to='/barchart'  className=' bg-green-600 text-white rounded-md px-3 py-1 hover:bg-green-800 hover:text-red-300'>Barchart</Link>
       </div>
        </div>
     
    </nav> 
    </div>
  )
}

export default Navbar
