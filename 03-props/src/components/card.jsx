import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div className='card'>
        <img src={props.img} alt='profile' /> 
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, beatae!</p>
        <button>View Profile</button>
       </div>
    </div>
  )
}

export default Card