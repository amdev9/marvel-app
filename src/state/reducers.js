import { CREATE_HERO, SEARCH_HEROES } from "./actions";

const initialState = { heroes: [], value: "", works: [] };

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_HERO:
      const heroes = [...state.heroes, payload];
      return { ...state, heroes };

    case SEARCH_HEROES:
      const { value } = action;

      const works = state.heroes.filter((heroObj) =>
        heroObj.title.includes(value)
      );

      return { ...state, value, works };

    default:
      return state;
  }
}

export const getValue = (state) => state.value || '';

export { reducer };
