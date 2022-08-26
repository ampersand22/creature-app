import React, {useState} from 'react'



const Card = (props) => {
  return (
    <div className="card-container">
        {props.creatures.map((creature)=> {
            return (
            <div className="card" style={{ width: '18rem' }}>
                    <img src={creature.image} addClass="card-img-top" alt='...' />
                    <div className="card-body">
                        <h3 class="card-title">{creature.name}</h3>
                        <p class="card-text">
                            Age: {creature.age}<br />
                            Species: {creature.species}<br />
                            Location: {creature.location}<br />
                            
                        </p>
                        
                    </div>
            </div>
                
            )
        })}
    </div>
  )
}

export default Card
