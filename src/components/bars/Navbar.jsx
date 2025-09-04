import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className='flex items-center justify-between bg-[#262626] text-white w-auto h-[50px] px-4'>
        <div className='text-2xl'><span className='text-green-500 font-bold'>Crypto</span>Market</div>

        <button className="bg-green-500 hover:bg-green-700 rounded-lg px-3 py-1 ">Buy Now</button>
        
      </div>
    </>
  )
}

export default Navbar





