import React from "react";

import "./card-list.styles.css";
import Card from "../card/card";

const CardList = props => {
  return (
    <div className="card-list-container">
      {props.monsters.map(item => (
        <Card key={item.id} monster={item}></Card>
      ))}
    </div>
  );
};
export default CardList;
