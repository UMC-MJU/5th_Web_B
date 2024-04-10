const GET_ID = "GET_ID";
const GET_PW = "GET_PW";

export const getID = (id) => {
  return {
    type: GET_ID,
    id,
  };
};
export const getPW = (pw) => {
  return {
    type: GET_PW,
    pw,
  };
};
const init = {
  id: "",
  pw: "",
};
export default function getelements(state = init, action) {
  switch (action.type) {
    case GET_PW:
      return { ...state, pw: action.pw };
    case GET_ID:
      return { ...state, id: action.id };
    default:
      return state;
  }
}
