export const GETCASTE = 'GETCASTE';

export const getCastDetail = (value) => {
    return {
      type: GETCASTE,
      payload: value,
    };
  }