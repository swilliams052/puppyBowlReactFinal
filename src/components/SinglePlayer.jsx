import React from "react";



const SinglePlayer = (props) => {
    return (
        <div className='single-player-card' onClick={() => props.setPlayer(props.player)}> 
            <h1>{props.player.name}</h1>
            <img className='dog-pics' src={`${props.player.imageUrl}`} />
            <div className='info-container'>
                <h2>Breed: {props.player.breed}</h2>
                <h2>Status: {props.player.status}</h2>
            </div>
        </div>

        
    )
    
}

export default SinglePlayer