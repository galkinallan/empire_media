// eslint-disable-next-line import/no-anonymous-default-export
export default (changes = [], action) => {
  switch (action.type) {
    case "FETCH_RECENT":
      return action.payload;
    default:
      return changes;
  }
};
