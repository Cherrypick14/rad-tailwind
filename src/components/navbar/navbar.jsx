import React, { useState } from 'react'
import { navLinks } from './utils/NavDB';

const Navbar = () => {
  return (
    <nav className='col-span-2 border-r border-cyan-900 min-h-[90vh] w-[80px] xl:w-[250px] flex flex-col pt-8 items-start justify-between'>
     <div className='space-y-8 w-full'>
     { navLinks.slice(0,4).map((link)=>(
       <Navitem link={link} key={link.id}/>
     ))}
     <div className='w-full border-t border-cyan-300'/>
       { navLinks.slice(4,6).map((link)=>(
       <Navitem link={link} key={link.id}/>
     ))}
     </div>
    </nav>
  )
}

function Navitem({link}){
    const[activeNav, setActiveNav] = useState();
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