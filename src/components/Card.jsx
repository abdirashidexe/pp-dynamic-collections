import React from "react";

export default function Playercard(player) {
    return(
        <div className="playercard">
            <img src={player}></img>
            <h1>{player.jersey}</h1>
            <h1>{player.name}</h1>
            <div class="playerinfo">
                <h2>{player.birthdate}</h2>
                {player.teams.map((item)=> (
                    <h3 key={item.id}>{player.team}</h3>
                ))}
            </div>
        </div>
    )
}