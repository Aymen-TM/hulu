import React from 'react'
import { useEffect } from 'react'
import Thumbnail from '../components/Thumbnail'

function Results({results}) {
  
  

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 p-4 items-center'>
      {results.map(res =>(
        <Thumbnail key={res.id} results={res} />
      ))}
    </div>
  )
}

export default Results