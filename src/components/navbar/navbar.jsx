import React, { useState } from 'react'
import { navLinks } from './utils/NavDB';
import {useRecoilState} from 'recoil';
import { activeNavItemState } from '../../atom/activetabstate';

const Navbar = () => {
  return (
    <nav className='col-span-2 border-r border-gray-300 min-h-[90vh] w-[80px] xl:w-[250px] flex flex-col pt-8 items-start justify-between'>
     <div className='space-y-8 w-full mb-8'>
     { navLinks.slice(0,4).map((link)=>(
       <Navitem link={link} key={link.id}/>
     ))}
     <div className='w-full border-t border-gray-300'/>
       { navLinks.slice(4,6).map((link)=>(
       <Navitem link={link} key={link.id}/>
     ))}
     </div>

     <div className='xl:flex flex-col hidden items-center justify-center space-y-3 p-4'>
        <h1 className='w-full text-xl font-medium'>
            Grow Your <br /> savings Now!
        </h1>
        <p>Pick a strategy that meets your goal</p>
        <button className='w-full py-3 px-3 bg-cyan-900 text-yellow-400'>Become a Pro</button>
     </div>
 
    </nav>
  )
}

function Navitem({link}){
    const[activeNav, setActiveNav] = useRecoilState(activeNavItemState);
    return(
    <div onClick={()=>setActiveNav(link.id)}
    className=
       { `w-full flex items-center justify-start space-x-8 px-5 cursor-pointer group hover:border-cyan-900 border-l-4 border-transparent 
       ${activeNav === link.id && "border-blue-900"}`
   }>
    <span>{link.icon}</span>
    <h1 className={`text-gray-500 group-hover:text-black xl:flex hidden ${activeNav === link.id && "text-red-600"}`}>
        {link.title}
        </h1>
    </div>
    ) 
}


export default Navbar;