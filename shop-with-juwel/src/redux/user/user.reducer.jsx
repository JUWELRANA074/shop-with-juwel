import { UserActionTypes } from './user.types';

const INITTAL_STATE = {
     currentUser:null
};

const userReducer = (state = INITTAL_STATE, action) => {
     switch (action.type) {
          case UserActionTypes.SET_CURRENT_USER:
               return{
                    ...state,
                    currentUser: action.payload
               };

     default:
          return state;
     }     
};

export default userReducer ;