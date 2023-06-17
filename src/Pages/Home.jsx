import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from "axios";
import ActivityCard from './ActivityCard';
const Home = () => {
  const[activity, setActivity] = useState([]);

  useEffect(() => {
   axios.get(`https://shy-blue-llama-sock.cyclic.app/trips`)
   .then((res) => {
    setActivity(res.data)
   })
   .catch((err) => {
    console.log(err)
   })
  },[])

console.log(activity)

  return (
    <>
    <div style={{margin:"auto", textAlign:"center", marginTop:"20px"}}>
    <h1 style={{ fontSize: '2em', fontWeight:"900" }}>Find your adventure</h1>
    <p>Thousands of ctivities, events, tours and guides</p>
    <input style={{width: "50%", height:"40px", borderRadius:"10px", marginTop:"20px", border:"1px solid grey", paddingLeft:"15px"}} type="search" placeholder='Search your city'/>
    </div>
    <div id='poster'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div id='popular-activity-box'>
        <div id='activity-heading'>
          <div id='activity-heading-left'>
          <h1>Feel incredible with</h1>
          <h1>Popular activities</h1>
          </div>
          <div id='activity-heading-right'>
            <p>Experience incredible emotions during your next adventure. It's time to break away
              from everydaylife and start the journey with our popular activities.
            </p>
          </div>
        </div>
        <div id='activity-content'>
          {activity.map((el) => {
            return   <ActivityCard
              title={el.title}
              image={el.image}
            />
          })}
           
        </div>
    </div>
    
    </>

  )
}

export default Home