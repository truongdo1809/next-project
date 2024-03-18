import React from 'react'
import { FaBars, FaSignOutAlt } from 'react-icons/fa'

const HeaderPageUser = () => {
  return (
    <>
      <div className='flex justify-between bg-[#2a2a2a] text-white px-[10px] py-[20px]'>
        <div className='icon-sidebar'>
        <FaBars />
        </div>
        <div className='flex items-center justify-center gap-[20px]'>
            <div>Name user</div>
            <div className='flex gap-[10px] items-center'><FaSignOutAlt />Logout</div>
        </div>

      </div>
    </>
  )
}

export default HeaderPageUser
