import React from 'react'
import { BellIcon, 
  ChipIcon,
  InboxIcon,
  SearchIcon, 
  UserCircleIcon } from '@heroicons/react/outline'

const Header = () => {
  return (
    <div className='w-full bg-[#2B3A55] py-4 items-center justify-between flex px-12'>
       {/* {search} */}
       <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2'>
          {/* {icon} */}
          <SearchIcon className='w-4 h-4 myheader'/>

          <input type='text'
           placeholder='search anything...'
           className='bg-transparent outline-none'/>
       </div>

       {/* {logo} */}
       <div className='items-center w-full justify-center flex space-x-6 myheader'>
        <ChipIcon className='w-6 h-6' />
        <h1 className='font-medium text-xl'>DevMe</h1>
       </div>

       {/* {icons} */}
       <div className='space-x-4 items-center flex w-full justify-end'>
        <BellIcon className='header-icon'/>
        <InboxIcon className='header-icon' />
        <UserCircleIcon className='header-icon' />
       </div>
    </div>
  )
}

export default Header;