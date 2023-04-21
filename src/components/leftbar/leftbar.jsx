import React from 'react'

const Leftbar = () => {
  return (
    <div className='w-full flex flex-col min-h-[90vh] col-span-2 border-r border-cyan-700'> 
        {/* {Top section} */}
        <div className='w-full flex flex-col items-start justify-start pb-6 px-12 pt-12'>

          <h1>My Cards</h1>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi voluptatem temporibus explicabo neque sed. Necessitatibus</p>
          <div>
            <h1></h1>
            <h1></h1>
            <h1></h1>

          </div>
        </div>
        {/* {Bottom Section} */}
    </div>
  )
}

export default Leftbar;