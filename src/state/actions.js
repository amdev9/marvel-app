export const CREATE_HERO = "CREATE_HERO";
export const SEARCH_HEROES = "SEARCH_HEROES";

export function actionSearch(value) {
  return { type: SEARCH_HEROES, value };
}
