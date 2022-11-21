import * as api from "../api";

export const getChanges = (params) => async (dispatch) => {
  try {
    const { data } = await api.fetchRecentChanges(params);
    const action = { type: "FETCH_RECENT", payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err.message);
  }
};
