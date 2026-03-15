import React, { useState } from 'react';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Sidebar from './Sidebar';
import SearchIcon from '@mui/icons-material/Search';


const Navbar = () => {

const [isOpen, setIsOpen] = useState(false);

  return (
    <>      

      <div className='sticky top-0 z-50 flex items-center justify-between bg-[#262626] text-white h-[50px] px-4'>
        <div className='text-2xl'><span className='text-green-500 font-bold'>Crypto</span>Market</div>

        <button className="bg-green-500 hover:bg-green-700 rounded-lg px-3 py-1 ">Buy Now</button>
      </div>

      <div className='flex h-screen'>
      {/* Sidebar - Fixed on left */}
      <Sidebar />

{/* Secondary Navbar */}
        <div className='flex flex-col flex-1'>
   <div className='sticky top-[50px] z-40 flex items-center justify-between bg-[#D3D3D3] border-b border-gray-200 h-[80px] px-4'>
    
          <div className='flex items-center justify-center ml-2'>
           <h4 className='font-semibold'>Dashboard</h4>
           <div className='flex items-center justify-center'>

  <div className='ml-2 relative w-fit'>
    <SearchIcon className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none' />
    <input
      type="search"
      name="Search"
      placeholder="Type to search..."
      className='border-1 w-[280px] rounded-[10px] py-2 pl-10 pr-4 outline-none'
    />

  </div>

</div>
 </div>
     
<div className='flex items-center gap-6'>

  <div className="flex items-center justify-center p-2 rounded-full cursor-pointer transition-colors duration-200 hover:bg-black hover:text-white">
    <MailOutlineIcon />
  </div>

  {/* Notifications Icon Wrapper */}
  <div className="flex items-center justify-center p-2 rounded-full cursor-pointer transition-colors duration-200 hover:bg-black hover:text-white">
    <NotificationsNoneIcon />
  </div>

  <span className='h-[50px] w-[2px] bg-gray-400'></span>

  <div className="cursor-pointer p-2 rounded-xl transition-colors duration-200 hover:bg-black hover:text-white" onClick={() => setIsOpen(!isOpen)}>
  <div className='font-medium mr-4'>Jonathan</div>
  <p className='text-gray-600 text-sm'>Admin</p>

  </div>

    {isOpen && (
        <ul className="mt-5 absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10 text-black">
          <li className="p-2 hover:bg-gray-100 cursor-pointer">My Profile</li>
          <li className="p-2 hover:bg-gray-100 cursor-pointer">Settings</li>
          <li className="p-2 border-t hover:bg-gray-100 cursor-pointer text-red-600">Logout</li>
        </ul>
      )}




</div>

</div>
</div>
</div>

    </>
  )
}

export default Navbar





