import React from "react";
import { Link } from "react-router-dom";
import SinglePlayer from "./SinglePlayer";


const Player = (props) => {
    return (
        <div className='single-player-card' onClick={() => props.setPlayer(props.player)}> 
            <h1>{props.player.name}</h1>
            <img className='dog-pics' src={`${props.player.imageUrl}`} />
            <div className='info-container'>
                <h2>Breed: {props.player.breed}</h2>
                <h2>Status: {props.player.status}</h2>
            </div>
            <Link to={`/SinglePlayer/${props.player.id}`}>
                <button onClick="">
                    Details
                </button>
            </Link>
               
        </div>

        
    )
    
}

export default Player