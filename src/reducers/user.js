import produce from 'immer';
import axios from 'axios'

const URL = 'https://mxl2ywa4zhlvwjymvb5gnc247a0qfndn.lambda-url.ap-northeast-2.on.aws/'
const _request = (request) => {
  return axios(request).then((result) => {
    return result.data
  }).catch((err) => {
    console.error(err)
  })
}

export const initialState ={
    image : '',
    serialNumber : '',
    price : 0,
    list: []
}


export const USER_REQUEST = 'USER_REQUEST';

export const userRequestAction = (data) => {
  // const limit = 10
  // const offset = 0
  // _request({
  //   method: 'get',
  //   url:  URL+ `?limit=${limit}&offset=${offset}`
  // }).then((result) => {
  //   console.log('Action 들어오나??', result)
  //   return result
  // })
    return{
        type:USER_REQUEST,
     } 
 }
 
const reducer = (state = initialState, action) =>{
  return produce(state, (draft) =>{
    switch (action.type) {
      case USER_REQUEST:
        draft.list = action.data
        console.log('draft.list', draft.list)
        break;
        
      default:
        break;
                
    }
  })
}

export default reducer;