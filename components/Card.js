import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const Card = ({id,title,description,location,date,image}) => {


const ndate =new Date(date);


  return (
    <div className="w-2/5 shadow-sm shaodw-slate-200 bg-slate-100 grid grid-cols-7 rounded-lg  h-52">
        <div 

            className="col-start-1 col-end-3 h-full "


        >
        <img src={image} className="w-full h-full object-cover" />
        
    </div>
<div

    className ="col-start-3 col-span-5 bg-green-100"
>

    <h1 className="font-bold text-2xl">{title}</h1>
    <div>{date}</div>
 
    <p>{location}</p>
<div className="w-full flex justify-end ">

    <Link href={`profile/${id}`}>
        <div className="bg-green-400 rounded-full w-32 p-2 flex items-center justify-center text-white  mr-2">checkout</div>
    </Link>
 </div>

</div>


    </div>
  )
}

export default Card