import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { IHero, IState } from '../types';

export default function Hero(props: any) {
  const heroes = useSelector((state: IState) => state.heroes);
  const items: IHero[] = heroes
    .filter((hero) => hero.id === props.match.params.id)
  const item: IHero | undefined = items.shift()

  return (
    <Layout>
      <h1>{item?.title}</h1>
      <img src={`${item?.image}`} alt={item?.title} />
      <p>{item?.description}</p>
    </Layout>
  );
}
