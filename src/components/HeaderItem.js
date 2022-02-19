import React from 'react'

function HeaderItem({title,Icon}) {
  return (
    <div className='flex flex-col items-center sm:w-20 w-12 cursor-pointer group'>
        <Icon className='h-8 mb-1 text-white group-hover:animate-bounce' />
        <p className='text-white tracking-widest opacity-0 group-hover:opacity-100' >{title}</p>
    </div>
  )
}

export default HeaderItem