import React from 'react'
import { IMG_CDN_URL } from '../Utlis/Constant'
const MovieCards = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 pr-4'>
        <img alt='Movie Card' src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCards