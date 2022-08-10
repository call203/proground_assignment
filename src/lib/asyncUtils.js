import axios from 'axios'

export const createPromiseThunk = (type, limit, offset) => {
  const URL = 'https://mxl2ywa4zhlvwjymvb5gnc247a0qfndn.lambda-url.ap-northeast-2.on.aws/'
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  limit = limit || 10
  offset = offset || 0 

  return param => async dispatch => {
    dispatch({ type, param });
    try {
      const payload = await axios(URL+ `?limit=${limit}&offset=${offset}`)
      console.log('asyncUtill :', payload)
      dispatch({ type: SUCCESS, payload }); // 성공
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true }); // 실패
    }
  };
};

export const reducerUtils = {
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null
  }),
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null
  }),
  success: payload => ({
    loading: false,
    data: payload.data,
    error: null
  }),
  error: error => ({
    loading: false,
    data: null,
    error: error
  })
};

export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading()
        };
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload)
        };
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.payload)
        };
      default:
        return state;
    }
  };
};