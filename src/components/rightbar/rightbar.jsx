import React from 'react'
import { CashIcon,CreditCardIcon} from '@heroicons/react/outline';
import Chart from './chat/chart';
import PortfolioItem from './PortfolioItem';
import { InvestDB } from '../leftbar/utils/InvestmentsDB';

const Rightbar = () => {
  return (
    <div className='col-span-3 w-full flex flex-col items-start justify-start pt-12 pb-6'>
      {/* {Top Section} */}
      <div className='md:flex lg:space-y-0 lg:space-x-4 px-12 items-center justify-center space-y-4'>
       
        <div className='space-y-6 items-center justify-center w-full flex flex-col'>
        <span className='px-4 py-4 rounded-full shadow-gray-500 shadow-lg items-center justify-center flex'>
          <CashIcon className='w-8 h-8 stroke-1'/>
        </span>
        <span className="items-center justify-center flex flex-col">
            <h2> On Time </h2>
            <h2 className="font-bold text-xl">$ 120.55 </h2>
        </span>
        </div>
        
        <div className="space-y-6 w-full items-center justify-center flex flex-col ">
          <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-500 items-center justify-center flex">
            <CreditCardIcon className="w-8 h-8 stroke-1" />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2> Round-Ups </h2>
            <h2 className="font-bold text-xl">$ 200.13 </h2>
          </span>
        </div>
        
        <div className="bg-[#9772FB] pt-6 items-center justify-between flex flex-col w-full rounded">
          <span className="items-center justify-center flex flex-col w-full py-6">
            <h3> Total Amount </h3>
            <h1 className="text-black font-bold text-xl 2xl:text-3xl">
              $211,478.33
            </h1>
          </span>
          <div className="bg-black items-center justify-center flex text-white w-full py-3 ">
            <h1> Withdraw Earnings </h1>
          </div>
        </div>
        
      </div>
    
      <div className="border-t border-gray-200 w-full my-4" />
      
      {/* {Chart} */}
      
      <div className="w-full items-start justify-start flex flex-col px-12 py-2 ">
        <h1 className="text-xl font-bold xl:text-3xl"> Potential </h1>
        <Chart />
      </div>
    
      {/* {Bottom section} */}
      <div className="w-full items-start justify-start flex flex-col px-12 py-6">
        <h1 className="text-xl font-bold xl:text-3xl py-4 "> My Portfolio </h1>
        <div className="flex items-center justify-center space-x-6 overflow-x-auto w-full py-4 ">
          {InvestDB.map((data) => (
            <PortfolioItem data={data} key={data.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Rightbar;