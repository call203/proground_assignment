import axios from 'axios'

let offset = 0
export const createPromiseThunk = (type) => {
  const URL = 'https://mxl2ywa4zhlvwjymvb5gnc247a0qfndn.lambda-url.ap-northeast-2.on.aws/'
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  const limit = 10
  return param => async dispatch => {
    dispatch({ type, param });
    try {
      const payload = await axios(URL+ `?limit=${limit}&offset=${offset}`)
      dispatch({ type: SUCCESS, payload }); // 성공
      offset = offset + 10 
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true }); // 실패
    }
  };
};
