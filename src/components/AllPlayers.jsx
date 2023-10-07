import React, { useState, useEffect } from "react"
import fetchPlayers from "./ajaxHelpers"
import Player from "./Player"

const AllPlayers = (props) => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        
      const getFetchPlayers = async () => {
        const data = await fetchPlayers()
        setPlayers(data.data.players)
        console.log(data)
    }
        getFetchPlayers()
    }, [])


    return (
        <div className='all-players'>
            {players.map((player) => {
                return (
                    <Player key={player.id} player={player} setPlayer={props.setPlayer} />

                )
            })}
        </div>
    )
}

export default AllPlayers