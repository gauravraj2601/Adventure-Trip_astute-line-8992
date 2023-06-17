import React from 'react'
import "./ActivityCard.css";


const ActivityCard = ({title, image}) => {
  return (
    <>
      <div id='activity'>
        <div id='activity-image'>
            <img src={image} alt={title} />
        </div>
        <div id='activity-info'>
           <p>{title}</p> 
           <p>Take the plunge, feel refreshed</p>
        </div>
      </div>
    </>
  )
}

export default ActivityCard