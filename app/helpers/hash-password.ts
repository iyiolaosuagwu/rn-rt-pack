import store from '@store';
import base64 from 'react-native-base64';

export const hashPassword = async (data: string) => {
    let hash_password = base64.encode(data);
    store.dispatch({
        type: 'TYPES.SET_PASSWORD_HASH',
        payload: hash_password,
    });
};

export const unHashPassword = async () => {
    const password_hash = store.getState().authReducer.passwordHash;
    const password = base64.decode(password_hash);
    return password;
};
