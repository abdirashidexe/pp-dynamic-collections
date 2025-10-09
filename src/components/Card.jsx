import React from "react";
import './Card.css';

export default function Playercard({player}) {
    return(
        <div className="playercard">
            <img src={player.img}></img>
            <h1 id="number">#{player.jersey}</h1>
            <h2 id="pos">{player.position}</h2>
            <h1 id="name">{player.name}</h1>
            <div className="playerinfo">
                <div className="teams">
                    {player.teams.map((item, index)=> (
                        <h4 key={index}>{item}</h4>
                    ))}
                </div>
            </div>
            <h2 id="stat">{player.stat}</h2>
        </div>
    )
}