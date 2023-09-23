import React, { useEffect, useState } from 'react';
import "./Home.css"
import axios from "axios";
import ActivityCard from './ActivityCard';


const Home = () => {
  const[activity, setActivity] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredActivity, setFilteredActivity] = useState([]);

  useEffect(() => {
   axios.get(`https://advtr-api.onrender.com/trips`)
   .then((res) => {
    setActivity(res.data)
   })
   .catch((err) => {
    console.log(err)
   })
  },[])

  useEffect(() => {
    const filtered = activity.filter((el) =>
      el.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredActivity(filtered);
  }, [activity, searchQuery]);

console.log(activity)

  return (
    <>
    <div style={{margin:"auto", textAlign:"center", marginTop:"20px"}}>
    <h1 style={{ fontSize: '2em', fontWeight:"900" }}>Find your adventure</h1>
    <p>Thousands of ctivities, events, tours and guides</p>
    <input style={{width: "50%", height:"40px", borderRadius:"10px", marginTop:"20px", border:"1px solid grey", paddingLeft:"15px"}}
     type="search" placeholder='Search your city' value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>

    </div>
    <div id='poster'>
        <div>
          <img src="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="adventure" />
        </div>
        <div>
          <div id='left-top-div'>
            <img src="https://images.unsplash.com/photo-1598557697170-cb25959d5ac8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fHN1c3BlbnNpb24lMjBicmlnZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="advtr" />
          </div>
          <div id='left-bottom-div'>
            <img src="https://images.unsplash.com/photo-1514923995763-768e52f5af87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90JTIwYWlyJTIwYmFsb29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="advtr" />
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1524755426512-7bcdac6c358a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="valley" />
        </div>
        <div>
        <div id='rigth-top-div'>
          <img src="https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvYXQlMjBpbiUyMGElMjBsYWtlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="advtr" />
        </div>
          <div id='rigth-bottom-div'>
            <img src="https://images.unsplash.com/photo-1520315397185-1ed215491386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI1fHxmcmllbmRzJTIwdHJlZWtpbmclMjBhdCUyMG1vdW50YWluJTIwdG9wJTIwd2l0aCUyMG5vJTIwdHJlZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="advtr" />
          </div>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1534387435-e9ff5846dac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80" alt="flight" />
        </div>
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
            {searchQuery
              ? filteredActivity.map((el) => (
                  <ActivityCard id={el.id} title={el.title} image={el.image} />
                ))
              : activity.map((el) => (
                  <ActivityCard id={el.id} title={el.title} image={el.image} />
                ))}
          </div>
    </div>
  
   
    </>

  )
}

export default Home
