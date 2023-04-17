import React from 'react'

const Header = () => {
  return (
    <div className='w-full py-6 items-center justify-between flex px-12'>
       {/* {search} */}
       <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2'>
          {/* {icon} */}
          <input type='text'
           placeholder='search anything...'
           className='bg-transparent outline-none'/>
       </div>
       {/* {logo} */}
       {/* {icons} */}
    </div>
  )
}

export default Header;