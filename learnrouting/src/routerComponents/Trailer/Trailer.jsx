import React from 'react'
import MovieData from '../Data/MovieData';
import './Trailer.css'
function Trailer() {
    return (
        <div>
         <video className='T-tag'>
     <source src={MovieData.trailer} type='video/mp4' />
    </video>   
        </div>
    )
}

export default Trailer ; 