import { getAllEvents, getEventById } from '@/data'
import React from 'react'

const profilepage = (props) => {


 const {event} = props;


  return (
    <div>
   <div className= "w-full h-32 bg-blue-500 flex text-center items-center justify-center text-white text-xl">
   {event.title}
   </div>
   <div className= "w-full h-32 flex items-center justify-center">
    <img src={event.image} className= "w-80 h-full object-cover"/>
   </div>
   <p
   
   className="text-2xl font-semibold "
   
   >
<div><div>time: {event.date}</div> <div>location: {event.location}</div> </div>


   </p>
    
<p>{event.description}</p>
    
    </div>
  )
}

export default profilepage



export const getStaticProps = (context) =>
{
        const {params} =context;
      
const eventId =params.id;

const event = getEventById(eventId);

return {

    props:{
       event
    }


}




}




export const getStaticPaths = ()=>{
const ids = getAllEvents().map(item=>item.id);
const params = ids.map(item=>({params:{id:item}}));




return{
paths: params,
fallback:'blocking'

};


}