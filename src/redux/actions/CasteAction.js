export const GETCASTE = "GETCASTE";
export const FETCHCASTENDING = "FETCHCASTENDING";

export const fetchcastPending = () => {
  return {
    type: FETCHCASTENDING,
  };
};

export const getCastDetail = (value) => {
  return {
    type: GETCASTE,
    payload: value,
  };
};
