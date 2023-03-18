import * as TYPES from '@dtos';
import * as DTOS from '@dtos';

const initialState: DTOS.UserReducerDataInterface = {
  user: null,
  token: null,
  isLoggedIn: false,
  account_setup: false,
  passwordHash: '',
  config: [],
};

export const authReducer = (state = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case TYPES.USER_LOGIN:
      return {
        ...state,
        token: payload,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};
