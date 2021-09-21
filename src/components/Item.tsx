import React from "react";
import { Link } from "react-router-dom";
import { IItemProps } from "../types";


const Item: React.FC<IItemProps> = (props: IItemProps) => {
  const { item } = props;

  return (
    <Link to={`/heroes/${item.id}`}>
      <h1>{item.title}</h1>
      <img src={`${item.image}`} alt={item.title} />
    </Link>
  );
};

export default Item;
