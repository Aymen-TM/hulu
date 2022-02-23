import React from 'react'
import {ThumbUpIcon} from '@heroicons/react/outline'

function Thumbnail({results}) {
const BASE_URL = "https://image.tmdb.org/t/p/original/";
return (
<div className='xs:max-w-sm md:max-w-md cursor-pointer group transition duration-100 sm:hover:scale-110 hover:z-50  '>
  <img height={1080} width={1920} src={`${BASE_URL}${results.backdrop_path || results.poster_path}`
    ||`${BASE_URL}${results.poster_path}` } />
  <div className='pt-1 text-white space-y-2'>
    <p className='truncate text-sm'>{results.overview}</p>
    <p className='truncate text-md'>{results.title}</p>
    <p className='flex items-center text-xs opacity-0 group-hover:opacity-100'>{results.release_date}
      <ThumbUpIcon className='h-4 mx-2' /> {results.vote_count}</p>
  </div>
</div>
)
}

export default Thumbnail