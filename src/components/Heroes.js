import React from "react";
import List from "./List";
import SearchBar from "./SearchBar";
import AddItem from "./AddItem";
import Layout from "./Layout";

function Heroes() {
  return (
    <Layout>
      <SearchBar />
      <List />
      <AddItem />
    </Layout>
  );
}

export default Heroes;
