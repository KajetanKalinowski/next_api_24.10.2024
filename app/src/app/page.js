'use client'
import { useState,useEffect } from "react"

export default function Home(){
  const [dane,setDane] = useState([])
  useEffect(()=>{
     const getData = async()=>{
      try{
        const data = await fetch(`https://catfact.ninja/fact`)
        const json = await data.json()
        console.log(json)
        setDane(json.fact)
      }catch(err){
        console.log(err)
      }finally{}
     }
     getData()
  },[])
  return(
    <div>
      <h1>{dane}</h1>
    </div>
  )
}