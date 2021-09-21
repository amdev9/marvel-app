import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/Layout";
import { IHero, IState, RouteParams } from "../types";
import { useParams } from "react-router-dom";

const Hero = () => {
  const params = useParams<RouteParams>();
  const heroes = useSelector((state: IState) => state.heroes);
  const items: IHero[] = heroes.filter((hero) => hero.id === params.id);
  const item: IHero | undefined = items.shift();

  return (
    <Layout>
      <h1>{item?.title}</h1>
      <img src={`${item?.image}`} alt={item?.title} />
      <p>{item?.description}</p>
    </Layout>
  );
};

export default Hero;
