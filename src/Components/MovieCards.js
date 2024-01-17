import React from 'react'
import { IMG_CDN_URL } from '../Utlis/Constant'
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
const MovieCards = ({posterPath , id}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
      <Link to={"/browse/" + id}>
      <img alt='Movie Card'   className='rounded-xl' src={IMG_CDN_URL + posterPath}/>
      </Link>
        
    </div>

    
  )
}

export default MovieCards