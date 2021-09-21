import React from "react";
import { Link } from "react-router-dom";

export default function Item(props) {
  const { item } = props;

  return (
    <Link to={`/heroes/${item.id}`}>
      <h1>{item.title}</h1>
      <img src={`${item.image}`} alt={item.title} />
    </Link>
  );
}
