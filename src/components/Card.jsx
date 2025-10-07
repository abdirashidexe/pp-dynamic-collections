import React from "react";

export default function Playercard({player}) {
    return(
        <div className="playercard">
            <img src={player.img}></img>
            <h1>{player.jersey}</h1>
            <h1>{player.name}</h1>
            <div className="playerinfo">
                <h2>{player.birthdate}</h2>
                <h2>Former teams:</h2>
                {player.teams.map((item, index)=> (
                    <h3 key={index}>{item}</h3>
                ))}
            </div>
        </div>
    )
}