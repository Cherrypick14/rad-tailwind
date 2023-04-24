import React from 'react'
import Investments from './Investments';
import { InvestDB } from './utils/InvestmentsDB';

const Leftbar = () => {
  return (
    <div className='w-full flex flex-col min-h-[90vh] col-span-2 border-r border-gray-300'> 
        {/* {Top section} */}
        <div className='w-full flex flex-col items-start justify-start pb-6 px-12 pt-12'>

          <h1 className='font-bold text-xl xl:text-2xl pb-3'>My Card</h1>
          <p className='text-md text-cyan-800'> Lorem ipsum dolor sit amet consectetur, adipisiceque sed.</p>
          <div className='items-start justify-start flex flex-col px-6 pt-8 pb-4 bg-[#50577A] mt-5 w-full rounded'>
            <h1>Riley Jones</h1>
            <h1 className='text-3xl xl:text-5xl font-bold py-6'>$800,640.00</h1>
          </div>

          <div className='bg-yellow-400 flex w-full justify-between px-8 py-5 items-start shadow-2xl shadow-blue-950 rounded'>
            <span className='items-start justify-start flex flex-col text-[#50577A]'>
              <h1>Card Number</h1>
              <h1>**** **** **** 1738</h1>

            </span>
            <span className='items-start justify-start flex flex-col text-[#50577A]'>
              <h1>CVV</h1>
              <h1>679</h1>

            </span>
          </div>
        </div>
        {/* {Bottom Section} */}
        <div className='w-full items-start justify-start px-12 py-6 flex flex-col'>
          <h1 className='font-bold text-xl xl:text-2xl pb-2'>Recent Investments</h1>
           <div className='w-full space-y-6 max-h-[350px] overflow-y-auto py-6'>
              {InvestDB.map((data)=>(
                 <Investments key={data.id} data={data} />
              ))}
           </div>
          
        </div>
    </div>
  )
}

export default Leftbar;