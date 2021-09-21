import React from "react";
import List from "../containers/List";
import SearchBar from "../containers/SearchBar";
import AddItem from "../containers/AddItem";
import Layout from "./Layout";

const Heroes = () => {
  return (
    <Layout>
      <SearchBar />
      <List />
      <AddItem />
    </Layout>
  );
}

export default Heroes;
