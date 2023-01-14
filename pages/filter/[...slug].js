import Card from '@/components/Card';
import { getFilteredEvents } from '@/data';
import { useRouter } from 'next/router'
import React,{useState,useRef,useEffect} from 'react'






const Filter = () => {
const [filterData,setFilterData]=useState([])

const formref= useRef();
    const data =useRouter();
    const [month,setMonth]=useState();
const [year,setYear]=useState();


    const months= ['january', 'february','march','april','may', 'june','july','august','september','october', 'november','december']
   useEffect(()=>{


    if(data.query.slug)
    {
if(data.query.slug.length===2)
{
    console.log(data.query.slug);

   const data1= getFilteredEvents({year:data.query.slug[1],month:data.query.slug[0]})
setFilterData(data1);
console.log(filterData);

}
else
{

    data.push('/404')
}

       
    }
  




   },[setMonth,setYear,month,year])



  return (
    <main className="w-screen bg-slate-200 h-screen">
      
    <div className="w-full pt-10 flex items-center justify-center flex-col gap-4">
      <form id="filter" ref={formref} className="flex gap-4 flex-row w-3/5 items-center justify-center" >  
      <div className="bg-white  w-52
          flex  items-center justify-center
      gap-4
       rounded-lg text-xl"><label className="text-blue-500" >select year</label>
        <select className="w-20 flex flex-col justify-center text-center">
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <div className="bg-white  w-52
          flex  items-center justify-center
      gap-4
       rounded-lg text-xl">
      <select>
        {
          months.map((item,idx)=>{
            return(
              <option value={idx}>{item}</option>
            )
          })
        }
      </select>
 </div>
    

      </form>
      <button 
      
      
      className="px-4 py-2 rounded-xl w-32 bg-yellow-200 text-black"
  
  
   onClick={()=>{
    
    
    setYear(formref.current[0].value);
            setMonth(formref.current[1].value);

              const date=new Date('2022-12-30');
              console.log(date.getMonth());
              data.push(`/filter/${year}/${month}`)
   }} >check</button>
    </div>


            <div id="layout" className="mt-6 flex flex-col items-center gap-4" >
         {
         filterData.map((item)=>{
                return (
                  <Card  date={item.date} 
                  description={item.description} 
                  id={item.id}
                  image={item.image}
                  location={item.location}
                  title={item.title}
                    
                  />
                )



          })
         }

            </div>

</main>
  )
}

export default Filter