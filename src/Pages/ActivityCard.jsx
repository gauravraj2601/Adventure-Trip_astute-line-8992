import React from 'react'
import "./ActivityCard.css";
import { Link } from 'react-router-dom';


const ActivityCard = ({id, title, image}) => {
  return (
    <>
      <div id='activity'>
        <div id='activity-image'>
            <Link to={`/singleCard/${id}`}>
            <img src={image} alt={title} />
            
            </Link>
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