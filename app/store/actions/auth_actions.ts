import store from '@store';
import {Dispatch} from 'redux';
import * as INTERFACE from '@dtos';

import axiosInstance from '@config/axios';

export const login =
  (payload: INTERFACE.LoginRequestInterface) => async (_dispatch: Dispatch) => {
    return axiosInstance.post('/login', payload);
  };

export const setAuthToken = async (token: string) => {
  let authToken: any = token || (await store.getState().authReducer.token);
  if (authToken) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${authToken}`;
  } else {
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};
