import React, { useState, useEffect } from "react"
import fetchPlayers from "./ajaxHelpers"
import SinglePlayer from "./SinglePlayer"

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
                    <SinglePlayer key={player.id} player={player} setPlayer={propssetPlayer} />
                )
            })}
        </div>
    )
}

export default AllPlayers