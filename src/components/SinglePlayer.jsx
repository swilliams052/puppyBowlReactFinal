import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SinglePlayer = (props) => {
  const { id } = useParams();
  const [player, setPlayer] = useState({});

  useEffect(() => {
    const getPlayer = async () => {
      try {
        const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/players/${id}`);
        const data = await response.json();
        setPlayer(data.data.player); // Use data to set the player state, not the player variable itself
      } catch (error) {
        console.log(error);
      }
    };

    getPlayer();
  }, [id]); // Add 'id' to the dependency array to re-fetch data when 'id' changes
        console.log(player)
  return (
    <div className='Single-Player-View'>
      <h1>Single Player</h1>
      <h2>
        Name: {player.name}
        Breed: {player.breed}
      </h2>
    </div>
  );
};

export default SinglePlayer;