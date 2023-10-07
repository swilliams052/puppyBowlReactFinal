import React from "react";
import { useState } from "react";



const NewPlayerForm = () => {
    const [player, setPlayer] = useState('')
    const [breed, setBreed] = useState('')
    const [error, setError] = useState(null)


    const handleSubmit = async (event) => {
        event.preventDefault()
        setPlayer('')
        setBreed('')
        try {
                const response = await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players', {
                    method: "POST",
                    body: JSON.stringify({
                        name: player,
                        breed: breed
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
               
            
            
        } catch (error) {
            setError(error.message)
        }
        


    }


    return (
        <div>
            {
                error ? <p>{error}</p> : null
            }
            <div className='new-player-form'> 
                <label>Create New Player:</label>
                <label>Name:
                    <input 
                    value={player} onChange={(event)=>{setPlayer(event.target.value)}}
                    type='text'
                    required
                    placeholder='Name'>
                    </input>
                </label>
                <label>Breed:
                    <input 
                    value={breed} onChange={(event)=>{setBreed(event.target.value)}}
                    type='text'
                    required
                    placeholder='Breed'>
                    </input>
                </label>

                <button className='submit-button' onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </div>
    )
}


export default NewPlayerForm