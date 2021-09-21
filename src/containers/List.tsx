import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import Item from "../components/Item";

import { IState } from "../types";

function PureHeroList() {
  const menuList = useSelector(selectorMenu, shallowEqual);

  return (
    <div>
      {menuList.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}

function selectorMenu(state: IState) {
  if (state.value) {
    return state.works;
  }
  return state.heroes;
}

const List = React.memo(PureHeroList);

export default List;
