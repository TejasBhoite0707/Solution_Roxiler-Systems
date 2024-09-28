import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";

const Dashboard = () => {

    const[selectedmonth,setSelectedmonth]=useState('')
    const months=['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December']
      const handleChange=(e)=>{
          setSelectedmonth(e.target.value)
    }
    
  return (
    <div className='min-h-screen'>
    <h1 className='text-center border-2 rounded-full bg-blue-600 text-white text-2xl font-medium'>Transition Dashboard</h1>
    <div className='flex justify-around mt-16'>
      <div className='flex items-center border-2 w-64 border-zinc-600 justify-between rounded-md'>
      <input type='search' placeholder='Enter The Transition'  name='Search' className='outline-none rounded-md px-3 py-1'/>
<IoIosSearch className='text-xl cursor-pointer'/>
    </div>
    <div>
     <label htmlFor='month'>month</label>
     <select id='month' value={selectedmonth} onChange={handleChange}>
<option value='' disabled className='outline-none border-2 border-zinc-500'>select the month</option>
{
  months.map((month,index)=>(
    <option key={index} value={month}>{month}</option>
  ))
};

     </select>
    </div>
    
    </div>
  <table border='1' className='table-auto w-full border-2 border-collapse border-gray-400 mt-10 bg-yellow-400 rounded-md ml-2 p-3'>
    <thead className=''>
      <tr className='border border-gray-400 px-4 py-2' >
      <th className='border border-gray-400 px-4 py-2'>ID</th>
      <th className='border border-gray-400 px-4 py-2'>TITLE</th>
      <th className='border border-gray-400 px-4 py-2'>DESCRIPTION</th>
      <th className='border border-gray-400 px-4 py-2'>PRICE</th>
      <th className='border border-gray-400 px-4 py-2'>CATEGORY</th>
      <th className='border border-gray-400 px-4 py-2'>SOLD</th>
      <th className='border border-gray-400 px-4 py-2'>IMAGE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className='border border-gray-400 px-4 py-2'>jjc</td>
        <td className='border border-gray-400 px-4 py-2'>jjw</td>
        <td className='border border-gray-400 px-4 py-2'>ji</td>
        <td className='border border-gray-400 px-4 py-2'>kkk</td>
        <td className='border border-gray-400 px-4 py-2'>jjw</td>
        <td className='border border-gray-400 px-4 py-2'>ji</td>
        <td className='border border-gray-400 px-4 py-2'>kkk</td>
      </tr>
    </tbody>
  </table>
  <div className='flex justify-between'>
  <h3>Page No:1</h3>
  <h3>Next-Previous</h3>
  <h3>Per Page-10</h3>
  </div>
    </div>
  )
}


export default Dashboard;
