import produce from 'immer';
import { createPromiseThunk } from '../lib/asyncUtils';

export const initialState ={
    list: {
      loading: false,
      data: [],
      error: null
    },
    item: {
      loading: false,
      data: null,
      error: null
    },
}

export const GET_USERS_DATA = 'GET_USERS_DATA';
export const GET_USERS_DATA_SUCCESS = 'GET_USERS_DATA_SUCCESS';
export const GET_USERS_DATA_ERROR = 'GET_USERS_DATA_ERROR';

export const REMOVE_USER_DATA = 'REMOVE_USER_DATA';
export const REMOVE_USER_DATA_SUCCESS = 'REMOVE_USER_DATA_SUCCESS';
export const REMOVE_USER_DATA_ERROR = 'REMOVE_USER_DATA_ERROR';


export const getUsersData = createPromiseThunk(GET_USERS_DATA);

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
        draft.list.loading= true;
        draft.list.data= draft.list.data;
        draft.list.error= null;
        break;
        
      case GET_USERS_DATA_SUCCESS:
        draft.list.loading= false;
        draft.list.data= draft.list.data.concat(action.payload.data);
        draft.list.error= null;
        break;
        
      case GET_USERS_DATA_ERROR:
        draft.list.loading= false;
        draft.list.data= draft.list.data;
        draft.list.error= action.error;
        break;

      case REMOVE_USER_DATA:
        break;
      case REMOVE_USER_DATA_SUCCESS:
        draft.list.loading= false;
        draft.list.data = action.payload.data;
        draft.list.error= null;
      case REMOVE_USER_DATA_ERROR:
        break;
      default:
        break;
                
    }
  })
}

export default reducer;