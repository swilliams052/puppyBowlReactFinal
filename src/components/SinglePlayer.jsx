import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";




const SinglePlayer = (props) => {
    const { id } = useParams();
    const [player, setPlayer] = useState([]);
    

    useEffect( () => {
        try { const getPlayer = async () => {
            const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${id}`)

        const data = await response.json();
        setPlayer(player)
        console.log(data)

        }
        getPlayer()  
        } catch (error) {
            console.log(error)
        }
    },[]); 

    return (
        <div className='Single-Player-View'>
            <h1>
             Single Player
            </h1>  
                <h2>
                Name: {player.name}
                Breed: {player.breed}

                </h2>
        </div>
    )

}




export default SinglePlayer