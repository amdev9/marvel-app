export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.heroes);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore errors
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) {
      return undefined;
    }
    return { heroes: JSON.parse(serializedState) };
  } catch (error) {
    return undefined;
  }
};
