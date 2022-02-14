import React from "react";
import "./Leaderboard.css"

const Item = ({ row }) => {
    return (
        <li className="item" key={row.id}>
            <span className="tl">{row.name}</span>
            <span className="tr">{row.entries}</span>
        </li>
    );
}

export default Item;