import React from "react";
import { useSelector } from "react-redux";
import Layout from "./Layout";

export default function Hero(props) {
  const heroes = useSelector((state) => state.heroes);
  const item = heroes
    .filter((hero) => hero.id === props.match.params.id)
    .shift();

  return (
    <Layout>
      <h1>{item.title}</h1>
      <img src={`${item.image}`} alt={item.title} />
      <p>{item.description}</p>
    </Layout>
  );
}
