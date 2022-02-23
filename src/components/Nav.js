import React from 'react'
import requests from '../utils/request'

function Nav({setgenre}) {
return (
<nav className='relative'>
    <div className='flex text-2xl sm:px-20 overflow-x-scroll scrollbar-hide whitespace-nowrap space-x-10 sm:space-x-20'>
        {
        Object.entries(requests).map(([key,{title,url}])=>(
        <h1 className='text-white cursor-pointer duration-100 transition transform hover:scale-125 active:text-red-500 select-none'
            key={key} onClick={()=>{
                setgenre(key)
                console.log(url)
            }}>{title}</h1>
        ))
        }

    </div>
    <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12' />
    <div className='absolute top-0 left-0 bg-gradient-to-r from-[#06202A] h-10 w-1/12' />
</nav>
)
}

export default Nav