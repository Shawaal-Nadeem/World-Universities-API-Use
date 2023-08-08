'use client'
import { useEffect, useState } from "react";
import Loader from "./components/loading";
export default function Home() {

  const [state,setState]=useState([{}]);
  const [country,setCountry]=useState('Pakistan');
  const [state1,setState1]=useState(false);
  useEffect(()=>{
    async function getApi()
    {
      try
      {
        const apiData=await fetch(`http://universities.hipolabs.com/search?country=${country}`);
        const jsonData=await apiData.json();
        console.log(jsonData);
        setState(jsonData);
      }
      catch(error)
      {
        console.error(`Error is : ${error}`);
      }
    }
    getApi();  
  },[state1])
  
  function handle(){
    if(state1===false){
    setState1(true);
    }
    else if(state1===true)
    {
      setState1(false);
    }
  }
  return (
<>
<h1 className=" font-extrabold text-center text-3xl">World Universities</h1>
<div className=" flex justify-center mt-20">
<label>Enter Country : &nbsp;</label>
<input type='text' value={country} onChange={(e)=> setCountry(e.target.value)} className=" border border-black border-solid pl-2"/>
</div>
<div className=" flex justify-center mt-10">
<button onClick={()=>{handle()}} className=" bg-black text-white text-lg w-28 rounded-md">Search</button>
</div>
<div className=" mt-20">
  <div className=" flex justify-around w-full font-extrabold mb-5">
  <h2 className=" w-1/6">Ref no.</h2>
  <h2 className=" w-1/4">Country</h2>
  <h2 className=" w-1/4">University</h2>
  <h2 className=" w-1/5">Province</h2>
  </div>
  
  {state.map((parameter:any,index:number)=>{
    return(
  <ul key={index} className={index%2===1?'bg-slate-400 flex justify-around w-full mt-2':'bg-white flex justify-around w-full mt-2'}>
  {state.length===1?<Loader/>:
  <>
  <li className=" w-1/6"> {index+1}</li> 
   <li className=" w-1/4">{parameter.country}</li>
   <li className=" w-1/4">{parameter.name}</li>
   {parameter['state-province']!=null? <li className=" w-1/5">{parameter['state-province']}</li>:<p className=" w-1/5">Not Known</p> }
  </>
  }
    </ul>
  )})}
</div>

</>    
  )
}
