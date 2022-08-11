import produce from 'immer';
import { createPromiseThunk, reducerUtils, handleAsyncActions } from '../lib/asyncUtils';

export const initialState ={
    list: reducerUtils.initial(),
    item: reducerUtils.initial(),
}

export const GET_USERS_DATA = 'GET_USERS_DATA';
export const GET_USERS_DATA_SUCCESS = 'GET_USERS_DATA_SUCCESS';
export const GET_USERS_DATA_ERROR = 'GET_USERS_DATA_ERROR';

export const REMOVE_USER_DATA = 'REMOVE_USER_DATA';
export const REMOVE_USER_DATA_SUCCESS = 'REMOVE_USER_DATA_SUCCESS';
export const REMOVE_USER_DATA_ERROR = 'REMOVE_USER_DATA_ERROR';

export const getUsersData = createPromiseThunk(GET_USERS_DATA, 10, 0);
export const deleteUserData = selected => ({
  type: REMOVE_USER_DATA_SUCCESS,
  payload: {
    data: selected
  }
});
 
const reducer = (state = initialState, action) =>{
  return produce(state, (draft) =>{
    switch (action.type) {
      case GET_USERS_DATA:
      case GET_USERS_DATA_SUCCESS:
      case GET_USERS_DATA_ERROR:
        return handleAsyncActions(GET_USERS_DATA, 'list')(state, action);

      case REMOVE_USER_DATA:
      case REMOVE_USER_DATA_SUCCESS:
      case REMOVE_USER_DATA_ERROR:
        return handleAsyncActions(REMOVE_USER_DATA, 'list')(state, action);
      default:
        break;
                
    }
  })
}

export default reducer;