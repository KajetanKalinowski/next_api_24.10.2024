'use client'
import { useState,useEffect } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home(){
  const [dane,setDane] = useState([])
  const [zmiana,setZmiana] = useState(0)
  const [load,setLoad] = useState(true)
  
  useEffect(()=>{
     var getData = async()=>{
      try{
        const data = await fetch(`https://catfact.ninja/fact`)
        const json = await data.json()
        console.log(json)
        setDane(json.fact)
        setLoad(true)
      }catch(err){
        console.log(err)
      }finally{
        setLoad(false)
      }
     }
     getData()
     const funkcja = async()=>{
      
     }
  },[])
  return(
    <div className="flex flex-col flex-wrap justify-center items-center w-full h-screen">
      <Card className="flex flex-col items-center">
  <CardHeader>
    <CardTitle>Losowe fakty o kotach</CardTitle>
  </CardHeader>
  <CardContent >
    <h1>Fakt:</h1>
  </CardContent>
  <CardContent>
    {load?(<p>Ładowanie...</p>):(<p>{dane}</p>)}
  </CardContent>
  <CardContent>
    <Button >Losuj następny</Button>
  </CardContent>
</Card>

    </div>
  )
}